import { setStorageApi } from '../services/storageApi';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setAppAuthenticated, setLoadingApp } from '../store/slices/appSlice';
import { setUser, IUser } from '../store/slices/userSlice';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { ROUTES } from '../utils/constants';
import Cookies from 'js-cookie';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './config/configFB';

const ActionsAuth = () => {
  const dispatch = useDispatch();
  const { httpRequest } = useHttp();

  const history = useHistory();
  const [getUser, setGetUser] = useState(true);

  const loginFirebase = useCallback(
    async (email: string, password: string, params: string) => {
      try {
        const response = await httpRequest(`${ROUTES.AUTHORIZATION_API}/${params}`, 'POST', {
          email: email,
          password: password,
        });
        setStorageApi('token ', response.token);
        return response;
      } catch (error: any) {
        dispatch(setErrorMessage(error.response.data.message));
        throw error;
      }
    },
    [dispatch, httpRequest]
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
      //dispatch(setLoadingApp(false));
    }
  }, [dispatch, history]);

  const logoutFirebaseAction = useCallback(async () => {
    try {
      const response = await httpRequest(ROUTES.LOGOUT_API);
      Cookies.remove('fbAuth');
      history.replace('/login');
      return response;
    } catch (err: any) {
      dispatch(setErrorMessage(err.response.data.message));
      throw err;
    }
  }, [dispatch, history, httpRequest]);

  const loginWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const user = response.user as any;
      const token = user.accessToken;
      console.log('token from login',token)
      Cookies.set('fbAuth',token)
      dispatch(setAppAuthenticated(true));
      history.push('/');
      return { user, token };
    } catch (err) {
      dispatch(setErrorMessage('Something went wrong!'));
    }
    console.log('s');
  }, [dispatch, history]);

  return {
    loginFirebase,
    checkTokenIsExpired,
    getUser,
    setGetUser,
    logoutFirebaseAction,
    loginWithGoogle,
  };
};
export default ActionsAuth;
function async(): any {
  throw new Error('Function not implemented.');
}
