import { NextFunction, Request, Response } from 'express';
import { authAdmin } from '../firebaseAdmin';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.fbAuth;
  //const token = req.headers['authorization-bearer'] as string;
  if (token) {
    try {
      const decodedToken = await authAdmin.verifyIdToken(token);
      const { uid } = decodedToken;
      res.locals.user = decodedToken;
      next();
    } catch (err) {
      res.status(403).send({ message: err });
    }
  } else {
    res
      .status(403)
      .send({ message: 'You are not authorized to access this page. Please sign in.' });
  }
};
