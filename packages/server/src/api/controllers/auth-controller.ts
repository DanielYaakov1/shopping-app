import { Request, Response, NextFunction } from 'express';

import { AdminHandler } from '../handlers/admin-handler';
import { FirebaseHandler } from '../handlers/FirebaseHandler';

export const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminHandler = new AdminHandler();
    const checkIsAdmin = await adminHandler.getAdminByEmail(res.locals.user.email);
    res.status(200).send({ uid: res.locals.user.uid, isAdmin: !!checkIsAdmin });
  } catch (err) {
    next(err);
  }
};

export const loginFirebase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const authHandler = new FirebaseHandler();
    const adminHandler = new AdminHandler();
    const response = await authHandler.login(email, password);
    const userCredential = response;
    const checkIsAdmin = await adminHandler.getAdminByEmail(String(userCredential.user.email));
    res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.token);
    res.send({ ...userCredential, isAdmin: !!checkIsAdmin });
  } catch (err) {
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
