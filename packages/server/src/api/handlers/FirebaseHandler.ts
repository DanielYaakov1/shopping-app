import { authAdmin } from '../../config/firebase/firebaseAdmin';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase/firebase';
import { IAuthenticator, IUser } from '../interfaces/interfaces';

export class FirebaseHandler implements IAuthenticator {
  async login(email: string, password: string): Promise<IUser> {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await res.user.getIdToken();
    return { token: idToken, uid: res.user.uid, user: res.user };
  }
  async register(email: string, password: string): Promise<IUser> {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const idToken = await res.user.getIdToken();
    return { token: idToken, uid: res.user.uid, user: null };
  }
  async checkAuth(token: string) {
    return await authAdmin.verifyIdToken(token);
  }
}
