//languages:TypeScript
import React, { useState } from 'react';
import MyButton from '../components/generic/MyButton';
import MyInput from '../components/generic/MyInput';
import ActionsAuth from '../actions/auth';
import { getValidationFunction } from '../services/ValidationHelper';

export const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errorMessage, setErrorMessage] = useState('');
     const { loginFirebase } = ActionsAuth();

     const handleSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (email.includes('@') && password.trim().length > 0) {
               loginFirebase(email, password);
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
                         // onClick={() => {
                         //      setEmail('');
                         //      setPassword('');
                         // }}
                         label='Login'
                    />
               </form>
               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
     );
};
export default Login;
