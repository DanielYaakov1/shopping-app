import { setStorageApi, getStorageApi } from './../services/storageApi';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setAppAuthenticated, setLoading } from '../store/slices/appSlice';
import { setUser, IUser } from '../store/slices/userSlice';
import { useHistory } from 'react-router-dom';

const fetcher = (url: string, method = 'GET', body?: Record<string, any>) => {
  const bodyJson = body ? { body: JSON.stringify(body) } : {};
  const bodyHeaders = body ? { 'Content-Type': 'application/json' } : { 'Content-Type': '' };
  const token = getStorageApi('token');
  return fetch(url, {
    method,
    headers: {
      ...bodyHeaders,
      'Access-Control-Allow-Origin': '*',
      ...(token ? { 'authorization-bearer': token } : {}),
    },
    ...bodyJson,
  });
};

const ActionsAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [getUser, setGetUser] = useState(true);

  const loginFirebase = useCallback(
    async (email: string, password: string, params: string) => {
      try {
        const url = `/api/v1/auth/${params}`;
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
      dispatch(setLoading(true));
      const response = await fetch('/api/v1/auth/check-token-expired');
      const user = (await response.json()) as IUser;
      if (response.status !== 200) {
        //dispatch(setUser(user.message.code));
        //dispatch(setErrorMessage(user.message.code));
        setGetUser(false);
        dispatch(setAppAuthenticated(response.ok));
        dispatch(setLoading(false));
        return history.replace('/login');
      }
      dispatch(setAppAuthenticated(response.ok));
      dispatch(setUser({ ...user }));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
    } finally {
      //dispatch(setLoading(false));
    }
  }, [dispatch, history]);

  return { loginFirebase, checkTokenIsExpired, getUser };
};
export default ActionsAuth;
