import { NextFunction, Request, Response } from 'express';
import { authAdmin } from '../firebaseAdmin';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.fbAuth;
  if (token) {
    try {
      const decodedToken = await authAdmin.verifyIdToken(token);
      if (decodedToken) {
        res.send({
          verifyToken: true,
        });
      }
    } catch (err) {
      res.status(403).send({ verifyToken: false });
    }
  } else {
    res.status(403).send({
      message: "We couldn't find a token. Please sign in.",
    });
  }
  next();
};
