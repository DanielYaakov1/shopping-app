import { Authenticator } from '../interfaces/interfaces';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { authAdmin } from '../../firebaseAdmin';

export class FirebaseHandler implements Authenticator {
     async login(email: string, password: string) {
          const res = await signInWithEmailAndPassword(auth, email, password);
          const idToken = await res.user.getIdToken();
          return { token: idToken, id: res.user.uid };
     }
     async register(email: string, password: string) {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const idToken = await res.user.getIdToken();
          return { token: idToken, id: res.user.uid };
     }
     async checkAuth(token: string) {
          const res = await authAdmin.verifyIdToken(token);
          return res;
     }
}
