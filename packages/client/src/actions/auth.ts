import { useCallback } from 'react';

const ActionsAuth = () => {
     const loginFirebase = useCallback(async (email: string, password: string) => {
          const response = await fetch('/auth/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
               },
               body: JSON.stringify({
                    email: email,
                    password: password,
               }),
          });
          const data = await response.json();
          if (!response.ok) {
               alert(data.error.message || 'Something went wrong');
               return data;
          }
          console.log(data);
          return data;
     }, []);

     return { loginFirebase };
};
export default ActionsAuth;
