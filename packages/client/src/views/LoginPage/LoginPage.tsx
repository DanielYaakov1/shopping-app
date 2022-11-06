//languages:TypeScript
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store';
import { setErrorMessage } from '../../store/slices/registrationSlice';
import {
  setAppAuthenticated,
  setLoginMode,
  setDisableSubmitButton,
} from '../../store/slices/appSlice';
import { getValidationFunction, checkEmailIsValid } from '../../utils/helpers/validation.helper';
import MyButton from '../../components/Button/MyButton';
import MyInput from '../../components/Input/MyInput';
import ActionsAuth from '../../actions/auth';
import { LoginStyledComponent } from '../../assets/style/components/LoginStyled';
import { setUser } from '../../store/slices/userSlice';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isErrorMessage = useSelector(
    (state: RootState) => state.registrationReducer.isErrorMessage
  );
  const { isLoginMode, isDisableSubmitButton } = useSelector(
    (state: RootState) => state.appReducer
  );
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
        const handleLogin = isLoginMode
          ? await loginFirebase(email, password, 'login')
          : await loginFirebase(email, password, 'signup');
        if (handleLogin.uid) {
          dispatch(setUser(handleLogin));
          dispatch(setAppAuthenticated(true));
          return history.push('/');
        } else {
          //dispatch(setErrorMessage('Something went wrong'));
          //dispatch(setErrorMessage(handle.message));
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
          <MyInput
            type="text"
            value={email}
            handleChangeValue={(e) => setEmail(e.target.value)}
            label={'Email'}
            placeholder={'example@ex.com'}
            checkInputValueIsValid={getValidationFunction('email')}
            errMessage={'The email you entered is invalid'}
          />
          <MyInput
            type="password"
            value={password}
            handleChangeValue={(e) => setPassword(e.target.value)}
            label={'Password'}
            errMessage={'Password should be in 6 latchets!'}
          />
          <div>
            don't have an account? <span onClick={switchLoginModeHandler}>click here</span>
          </div>

          <MyButton disabled={isDisableSubmitButton} type="submit" label={formTypeLabel} />
        </form>
        {isErrorMessage && <p style={{ color: 'red' }}>{isErrorMessage}</p>}
      </div>
    </LoginStyledComponent>
  );
};
export default LoginPage;