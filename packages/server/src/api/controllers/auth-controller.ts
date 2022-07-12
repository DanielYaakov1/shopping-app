import type { Request, Response } from 'express';
import { auth } from '../../firebase';
import { FirebaseHandler } from '../handlers/FirebaseHandler';

export const loginFirebase = async (req: Request, res: Response) => {
     try {
          const { email, password } = req.body;
          const authHandler = new FirebaseHandler();
          const response = await authHandler.login(email, password);
          const userCredential = response;
          res.cookie('fbAuth', userCredential.token);
          res.send(userCredential);
     } catch (err) {
          res.send(err);
     }
};

export const signupFirebase = async (req: Request, res: Response) => {
     try {
          const { email, password } = req.body;
          const authHandler = new FirebaseHandler();
          const response = await authHandler.register(email, password);
          const userCredential = response;
          res.cookie('fbAuth', userCredential.token);
          res.send(userCredential);
     } catch (err) {
          res.send(err);
     }
};

export const checkAuth = async (req: Request, res: Response) => {
     try {
          const { id } = req.body;
          const authHandler = new FirebaseHandler();
          const response = await authHandler.checkAuth(id);
          res.send(response);
     } catch (err) {
          res.send(err);
     }
};

///---------------------------------------------------------------------------------------------------------------------
//
// export const signupFirebase = (req: Request, res: Response) => {
//      const { email, password } = req.body;
//      // const { email, password } = { email: 'a@a.com', password: '1' };
//      createUserWithEmailAndPassword(auth, email, password)
//           .then(userCredential => {
//                // Signed in
//                const user = userCredential.user;
//                res.send(user);
//           })
//           .catch(error => {
//                const errorCode = error.code;
//                const errorMessage = error.message;
//                res.send(error);
//           });
// };
//
// export const loginFirebase = async (req: Request, res: Response) => {
//      const { email, password } = req.body;
//      signInWithEmailAndPassword(auth, email, password)
//           .then(async userCredential => {
//                // Signed in
//                const user = userCredential.user;
//                // ...
//                res.cookie('fb-auth', await user.getIdToken());
//                res.send(user);
//           })
//           .catch(error => {
//                const errorCode = error.code;
//                const errorMessage = error.message;
//                res.send(error);
//           });
// };
