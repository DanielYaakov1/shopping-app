//languages:TypeScript
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setLoginMode } from '../store/slices/appSlice';
import { getValidationFunction } from '../services/ValidationHelper';
import MyButton from '../components/generic/MyButton';
import MyInput from '../components/generic/MyInput';
import ActionsAuth from '../actions/auth';
import { useCallback } from 'react';

export const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const isErrorMessage = useSelector((state: RootState) => state.registrationReducer.isErrorMessage);
     const isLoginMode = useSelector((state: RootState) => state.appReducer.isLoginMode);
     const history = useHistory();
     const { loginFirebase } = ActionsAuth();
     const dispatch = useDispatch();

     const handleSubmitLoginForm = useCallback(
          async (e: React.FormEvent<HTMLFormElement>) => {
               e.preventDefault();
               const isEmailPasswordValid = email.includes('@') && password.trim().length > 0;
               const handleLogin = isLoginMode ? await loginFirebase(email, password, 'login') : await loginFirebase(email, password, 'signup');
               if (handleLogin.id) {
                    history.push('/home');
               } else {
                    dispatch(setErrorMessage(handleLogin.code));
               }
          },
          [email, password, isLoginMode, history, dispatch, loginFirebase]
     );
     const switchLoginModeHandler = useCallback(() => {
          dispatch(setLoginMode());
     }, [dispatch]);

     //use memo fot form type label
     const formTypeLabel = isLoginMode ? 'Login' : 'Sign up';

     return (
          <div>
               <h1>{formTypeLabel}</h1>
               <form onSubmit={handleSubmitLoginForm}>
                    <MyInput type='text' value={email} handleChangeValue={e => setEmail(e.target.value)} label={'Email'} placeholder={'example@ex.com'} checkInputValueIsValid={getValidationFunction('email')} />
                    <MyInput type='password' value={password} handleChangeValue={e => setPassword(e.target.value)} label={'Password'} />
                    <div>
                         don't have an account? <span onClick={switchLoginModeHandler}>click here</span>
                    </div>
                    <MyButton disabled={false} type='submit' label={formTypeLabel} />
               </form>

               {isErrorMessage && <p style={{ color: 'red' }}>{isErrorMessage}</p>}
          </div>
     );
};
export default Login;
