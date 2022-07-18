import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import { loginFirebase, signupFirebase, checkAuth, refreshUser } from '../controllers/auth-controller';

export const authRouter = Router();

authRouter.post('/login', loginFirebase);
authRouter.post('/signup', signupFirebase);
authRouter.post('/check-auth', checkAuth);
authRouter.get('/refresh', requireAuth, refreshUser);
