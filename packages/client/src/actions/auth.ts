import { setStorageApi, getStorageApi } from './../services/storageApi';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setAppAuthenticated, setLoading, setUser } from '../store/slices/appSlice';
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
                    const url = `/auth/${params}`;
                    const response = await fetcher(url, 'POST', {
                         email: email,
                         password: password,
                    });
                    const data = await response.json();
                    if (!response.ok) {
                         dispatch(setErrorMessage(data.error.message || 'Something went wrong'));
                         return data;
                    }
                    setStorageApi('token', data.token);
                    return data;
               } catch (error) {
                    if (error instanceof Error) {
                         dispatch(setErrorMessage(error.message));
                         return error;
                    }
               }
          },
          [dispatch]
     );

     // send request to server with fetcher
     const checkTokenIsExpired = useCallback(async () => {
          dispatch(setLoading(true));
          try {
               const response = await fetch('/auth/check-token-expired');
               const user = await response.json();
               if (response.status !== 200) {
                    //dispatch(setUser(user.message.code));
                    //dispatch(setErrorMessage(user.message.code));
                    setGetUser(false);
                    dispatch(setAppAuthenticated(response.ok));
                    return history.replace('/login');
               }
               dispatch(setAppAuthenticated(response.ok));
               dispatch(setUser(user));
          } catch (err) {
               console.log(err, 'this is the error');
          } finally {
               dispatch(setLoading(false));
          }
     }, [dispatch, history]);

     return { loginFirebase, checkTokenIsExpired, getUser };
};
export default ActionsAuth;

//
// headers :{
//      ...bodyHeaders,
//      ...{ Authorization: `Bearer ${token}` },
// }
