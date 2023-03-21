import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActionsAuth from '../../actions/auth';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  setAppAuthenticated,
  setDisableSubmitButton,
  setErrorMessage,
  setLoginMode,
} from '../../store/slices/appSlice';
import { checkEmailIsValid } from '../../utils/helpers/validation.helper';
import { RootState } from '../../store';
import { setUser } from '../../store/slices/userSlice';
import { ReactComponent as FacebookButton } from '../../assets/images/facebook.svg';
import { ReactComponent as GoogleButton } from '../../assets/images/google.svg';
import useStyles from './useStyles';

export default function Login() {
  const { loginFirebase, loginWithGoogle, loginWithFacebook } = ActionsAuth();
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoginMode, isDisableSubmitButton } = useSelector(
    (state: RootState) => state.appReducer
  );
  const isErrorMessage = useSelector(
    (state: RootState) => state.registrationReducer.isErrorMessage
  );
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isValidForm) {
        const handleLogin = await loginFirebase(email, password, isLoginMode ? 'login' : 'signup');
        if (handleLogin.uid) {
          dispatch(setUser(handleLogin));
          dispatch(setAppAuthenticated(true));
          return history.push('/');
        } else {
          dispatch(setErrorMessage('Something went wrong'));
          //dispatch(setErrorMessage(handle.message));
        }
      } else {
        dispatch(setErrorMessage('Please fill all fields'));
      }
    },
    [dispatch, email, history, isLoginMode, isValidForm, loginFirebase, password]
  );

  useEffect(() => {
    setIsValidForm(checkEmailIsValid(email) && password.trim().length > 0);
    if (isValidForm) {
      dispatch(setDisableSubmitButton(false));
    } else {
      dispatch(setDisableSubmitButton(true));
    }
  }, [dispatch, email, isValidForm, password]);

  const switchLoginModeHandler = useCallback(() => {
    dispatch(setLoginMode());
  }, [dispatch]);

  const formTypeLabel = useMemo(() => {
    return !isLoginMode ? 'Sign Up' : 'Login';
  }, [isLoginMode]);

  const googleProvider = async () => {
    try {
      const test = await loginWithGoogle();
      return test;
    } catch (err) {
      console.log(err);
      dispatch(setErrorMessage('Something went wrong!'));
    }
  };
  const facebookProvider = async () => {
    try {
      const test = await loginWithFacebook();
      return test;
    } catch (err) {
      console.log(err);
      dispatch(setErrorMessage('Something went wrong!'));
    }
  };
  return (
    <Container
      component="main"
      maxWidth={'xl'}
      style={{
        paddingRight: 0,
        paddingLeft: 0,
      }}>
      <Box
        sx={{
          marginTop: 0,
        }}>
        <Grid container style={{ height: '100vh', width: '100%' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Typography component="h1" variant="h5">
                {formTypeLabel}
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  placeholder={'example@gamil.com'}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  disabled={isDisableSubmitButton}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  {formTypeLabel}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" onClick={switchLoginModeHandler}>
                      {isLoginMode ? "Don't have an account ? signup" : 'have an account ? login'}
                    </Link>
                  </Grid>
                  {isErrorMessage && <div style={{ color: 'red' }}>{isErrorMessage}</div>}
                </Grid>
              </Box>
            </Box>
            <div className={classes.btnContainer}>
              <FacebookButton onClick={facebookProvider}></FacebookButton>
              <GoogleButton onClick={googleProvider}></GoogleButton>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
