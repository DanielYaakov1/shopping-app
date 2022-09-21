import type { Request, Response, NextFunction } from 'express';
import { auth } from '../../firebase';
import { FirebaseHandler } from '../handlers/FirebaseHandler';

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
    console.log(err);
    //next({ status: err.statusCode, ...err });
    //res.send(err);
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
    //res.send(err);
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
    //res.send(err);
  }
};