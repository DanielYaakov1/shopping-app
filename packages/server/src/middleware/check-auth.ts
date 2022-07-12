import { NextFunction, Request, Response } from 'express';
import { authAdmin } from '../firebaseAdmin';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
     const token = req.cookies?.fbAuth;
     if (token) {
          // idToken comes from the client app
          try {
               const decodedToken = await authAdmin.verifyIdToken(token);
               const { uid } = decodedToken;
               //console.log(uid, 'this is the uid');
               console.log(decodedToken, 'this is the decodedToken');
               const user = await authAdmin.getUser(uid);
               console.log(user, 'this is the user');
               // const getDate = Date.now();
               // console.log(getDate, 'this is the getDate');
               // const getDatePlusOneHour = getDate + 3600000;
               // if (getDatePlusOneHour > decodedToken.exp) {
               //      res.redirect('/');
               // }
               //req.user = decodedToken;
               //res.send(uid);
               next();
          } catch (err) {
               console.log(err);
               next(err);
          }
     } else {
          next('You are not authorized to access this page. Please sign in.');
     }
};
