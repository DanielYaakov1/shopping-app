import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../store/slices/registrationSlice';

const ActionsAuth = () => {
     const dispatch = useDispatch();

     const loginFirebase = useCallback(
          async (email: string, password: string, params: string) => {
               try {
                    const response = await fetch(`/auth/${params}`, {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                         },
                         body: JSON.stringify({
                              email: email,
                              password: password,
                         }),
                    });
                    const data = await response.json();
                    if (!response.ok) {
                         dispatch(setErrorMessage(data.error.message || 'Something went wrong'));
                         return data;
                    }
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
