import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import {
  loginFirebase,
  signupFirebase,
  checkAuth,
  checkIsAdminUser,
} from '../controllers/auth-controller';

export const authRouter = Router();

authRouter.post('/login', loginFirebase);
authRouter.post('/signup', signupFirebase);
authRouter.post('/check-auth', checkAuth);
authRouter.get('/check-token-expired', requireAuth, checkIsAdminUser);
