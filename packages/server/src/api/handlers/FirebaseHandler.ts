import { Authenticator } from '../interfaces/interfaces';
//import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase-admin/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { authAdmin } from '../../firebaseAdmin';

export class FirebaseHandler implements Authenticator {
     async login(email: string, password: string) {
          const res = await signInWithEmailAndPassword(auth, email, password);
          const idToken = await res.user.getIdToken();
          console.log(res.providerId, 'this is the providerID');
          return { token: idToken, id: res.user.uid };
          //return { token: 's', id: 's' };
     }
     async register(email: string, password: string) {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          //const res = await auth.createUser({ email, password });
          const idToken = await res.user.getIdToken();
          return { token: idToken, id: res.user.uid };
          //return { token: 's', id: res.uid };
     }
     async checkAuth(token: string) {
          const res = await authAdmin.verifyIdToken(token);
          return res;
     }
}
