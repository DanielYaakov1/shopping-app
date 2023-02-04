import { AwsCognitoHandler } from '../handlers/awsCognito-handler';
import { NextFunction, Request, Response } from 'express';
import { AdminHandler } from '../handlers/admin-handler';
import { FirebaseHandler } from '../handlers/FirebaseHandler';

export const checkIsAdminUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminHandler = new AdminHandler();
    const checkIsAdmin = await adminHandler.getAdminByEmail(res.locals.user.email);
    console.log(res.locals.user);
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
    const userCredential = await authHandler.login(email, password);
    const checkIsAdmin = await adminHandler.getAdminByEmail(String(userCredential.user.email));
    res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.token);
    res.send({ ...userCredential, isAdmin: !!checkIsAdmin });
  } catch (err) {
    next(err);
  }
};
export const logoutFirebase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHandler = new FirebaseHandler();
    const response = await authHandler.logout();
    res.send({ message: 'Log-out successful.' });
  } catch (err) {
    next(err);
  }
};
export const signupFirebase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const authHandler = new FirebaseHandler();
    const userCredential = await authHandler.register(email, password);
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

export const signupCognito = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { Username, Password } = req.body;
    const authHandler = new AwsCognitoHandler();
    const userCredential = await authHandler.register(Username, Password);
    //res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.UserSub);
    res.send(userCredential);
  } catch (err) {
    next(err);
  }
};

export const loginCognito = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { USERNAME, PASSWORD } = req.body;
    const authHandler = new AwsCognitoHandler();
    const userCredential = await authHandler.login(USERNAME, PASSWORD);
    //res.cookie('fbAuth', userCredential.token);
    res.header('authorization-bearer', userCredential.token);
    res.send({ ...userCredential, isAdmin: true });
  } catch (err) {
    next(err);
  }
};

export const confirmSignupCognito = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { Username, ConfirmationCode } = req.body;
    const authHandler = new AwsCognitoHandler();
    const response = await authHandler.confirmSignup(Username, ConfirmationCode);
    res.send(response);
  } catch (err) {
    next(err);
  }
};
