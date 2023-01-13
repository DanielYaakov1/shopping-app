import admin, { ServiceAccount } from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import { firebaseConfigKeys } from './keys';

const adminInit = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfigKeys as ServiceAccount),
});

const firebaseApp = adminInit;
export const authAdmin = getAuth(firebaseApp);
