import { setStorageApi, getStorageApi } from './../services/storageApi';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';

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

     return { loginFirebase };
};
export default ActionsAuth;

//
// headers :{
//      ...bodyHeaders,
//      ...{ Authorization: `Bearer ${token}` },
// }
