import { setStorageApi, getStorageApi } from './../services/storageApi';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setAppAuthenticated, setLoadingApp } from '../store/slices/appSlice';
import { setUser, IUser } from '../store/slices/userSlice';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { ROUTES } from '../utils/constants';

const ActionsAuth = () => {
  const dispatch = useDispatch();
  const { fetcher } = useHttp();
  const history = useHistory();
  const [getUser, setGetUser] = useState(true);

  const loginFirebase = useCallback(
    async (email: string, password: string, params: string) => {
      try {
        const url = `${ROUTES.AUTHORIZATION_API}/${params}`;
        const response = await fetcher(url, 'POST', {
          email: email,
          password: password,
        });
        const data = await response.json();
        if (!response.ok) {
          dispatch(setErrorMessage(data.message || 'Something went wrong'));
          return data;
        }
        setStorageApi('token', data.token);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          console.log(error, 'this is the error');
          dispatch(setErrorMessage(error.message));
          return error;
        }
      }
    },
    [dispatch]
  );

  const checkTokenIsExpired = useCallback(async () => {
    //The function checks if the user has an active token, if not it takes the user to the login screen
    try {
      dispatch(setLoadingApp(true));
      const response = await fetch(ROUTES.CHECK_TOKEN_EXPIRED_API);
      const user = (await response.json()) as IUser;
      if (response.status !== 200) {
        dispatch(setAppAuthenticated(response.ok));
        dispatch(setLoadingApp(false));
        return history.replace('/login');
      }
      dispatch(setAppAuthenticated(response.ok));
      dispatch(setUser({ ...user }));
      dispatch(setLoadingApp(false));
    } catch (err) {
      console.log(err);
    } finally {
      //dispatch(setLoading(false));
    }
  }, [dispatch, history]);

  return { loginFirebase, checkTokenIsExpired, getUser, setGetUser };
};
export default ActionsAuth;
