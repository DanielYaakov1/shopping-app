import { FirebaseHandler } from '../handlers/FirebaseHandler';
import type { Request, Response, NextFunction } from 'express';

export const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send(res.locals.user);
  } catch (err) {
    next(err);
    //res.send(err);
  }
};

export const loginFirebase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const authHandler = new FirebaseHandler();
    const response = await authHandler.login(email, password);
    const userCredential = response;
    res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.token);
    res.send(userCredential);
  } catch (err: any) {
    next(err);
  }
};

export const signupFirebase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const authHandler = new FirebaseHandler();
    const response = await authHandler.register(email, password);
    const userCredential = response;
    res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.token);
    res.send(userCredential);
  } catch (err) {
    next(err);
  }
};

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;
    const authHandler = new FirebaseHandler();
    const response = await authHandler.checkAuth(id);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
