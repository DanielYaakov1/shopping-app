//languages:TypeScript
import React, { useState } from 'react';
import MyButton from '../components/generic/MyButton';
import MyInput from '../components/generic/MyInput';

import { getValidationFunction } from '../services/ValidationHelper';

export const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errorMessage, setErrorMessage] = useState('');

     const handleSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (email.includes('@') && password.trim().length > 0) {
               setErrorMessage('');
          } else {
               setErrorMessage('Invalid email or password');
          }
     };

     return (
          <div>
               <h1>Login</h1>
               <form onSubmit={handleSubmitLoginForm}>
                    <MyInput type='text' value={email} handleChangeValue={e => setEmail(e.target.value)} label={'Email'} placeholder={'example@ex.com'} checkInputValueIsValid={getValidationFunction('email')} />
                    <MyInput type='password' value={password} handleChangeValue={e => setPassword(e.target.value)} label={'Password'} />
                    <MyButton
                         type='submit'
                         onClick={() => {
                              setEmail('');
                              setPassword('');
                         }}
                         label='Login'
                    />
               </form>
               {errorMessage && <p>{errorMessage}</p>}
          </div>
     );
};
export default Login;
