import { Router } from 'express';
import { loginFirebase, signupFirebase } from '../controllers/auth-controller';

export const authRouter = Router();

authRouter.post('/login', loginFirebase);
authRouter.post('/signup', signupFirebase);
