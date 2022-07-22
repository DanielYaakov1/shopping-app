//languages:TypeScript
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';
import { setErrorMessage } from '../store/slices/registrationSlice';
import { setAppAuthenticated, setLoginMode, setDisableSubmitButton, setUser } from '../store/slices/appSlice';
import { getValidationFunction, checkEmailIsValid } from '../services/ValidationHelper';
import MyButton from '../components/generic/MyButton';
import MyInput from '../components/generic/MyInput';
import ActionsAuth from '../actions/auth';
import { LoginStyledComponent } from '../assets/style/generic/LoginStyled';

export const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const isErrorMessage = useSelector((state: RootState) => state.registrationReducer.isErrorMessage);
     const isLoginMode = useSelector((state: RootState) => state.appReducer.isLoginMode);
     const isDisableButton = useSelector((state: RootState) => state.appReducer.isDisableSubmitButton);
     const isEmailPasswordValid = checkEmailIsValid(email) && password.trim().length > 0;

     const { loginFirebase } = ActionsAuth();
     const history = useHistory();
     const dispatch = useDispatch();

     useEffect(() => {
          if (isEmailPasswordValid) {
               dispatch(setDisableSubmitButton(false));
          } else {
               dispatch(setDisableSubmitButton(true));
          }
     }, [isEmailPasswordValid, dispatch]);

     const handleSubmitLoginForm = useCallback(
          async (e: React.FormEvent<HTMLFormElement>) => {
               e.preventDefault();
               if (isEmailPasswordValid) {
                    const handleLogin = isLoginMode ? await loginFirebase(email, password, 'login') : await loginFirebase(email, password, 'signup');
                    if (handleLogin.id) {
                         history.push('/');
                         dispatch(setUser(handleLogin));
                         dispatch(setAppAuthenticated(true));
                    } else {
                         dispatch(setErrorMessage(handleLogin.code));
                    }
               } else {
                    dispatch(setErrorMessage('Please fill all fields'));
               }
          },
          [isEmailPasswordValid, isLoginMode, loginFirebase, email, password, history, dispatch]
     );
     const switchLoginModeHandler = useCallback(() => {
          dispatch(setLoginMode());
     }, [dispatch]);

     const formTypeLabel = useMemo(() => {
          return !isLoginMode ? 'Sign Up' : 'Login';
     }, [isLoginMode]);

     return (
          <LoginStyledComponent>
               <div>
                    <h1>{formTypeLabel}</h1>
                    <form onSubmit={handleSubmitLoginForm}>
                         <MyInput type='text' value={email} handleChangeValue={e => setEmail(e.target.value)} label={'Email'} placeholder={'example@ex.com'} checkInputValueIsValid={getValidationFunction('email')} />
                         <MyInput type='password' value={password} handleChangeValue={e => setPassword(e.target.value)} label={'Password'} />
                         <div>
                              don't have an account? <span onClick={switchLoginModeHandler}>click here</span>
                         </div>

                         <MyButton disabled={isDisableButton} type='submit' label={formTypeLabel} />
                    </form>
                    {isErrorMessage && <p style={{ color: 'red' }}>{isErrorMessage}</p>}
               </div>
          </LoginStyledComponent>
     );
};
export default Login;
