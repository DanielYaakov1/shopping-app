import { Router } from 'express';
import errorHandleMiddleware from '../../middleware/errorHandle';
import { requireAuth } from '../../middleware/requireAuth';
import {
  loginFirebase,
  signupFirebase,
  checkAuth,
  checkUser,
} from '../controllers/auth-controller';

export const authRouter = Router();

authRouter.post('/login', loginFirebase);
authRouter.post('/signup', signupFirebase);
authRouter.post('/check-auth', checkAuth);
authRouter.get('/check-token-expired', requireAuth, checkUser);
