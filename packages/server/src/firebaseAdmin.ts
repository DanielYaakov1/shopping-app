import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

const serviceAccountFile: string = require(`../apiKey.json`);

const adminInit = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountFile),
});

const firebaseApp = adminInit;
export const authAdmin = getAuth(firebaseApp);
