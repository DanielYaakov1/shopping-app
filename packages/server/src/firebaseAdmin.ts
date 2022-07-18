import { getAuth } from 'firebase-admin/auth';
import admin from 'firebase-admin';

const serviceAccountFile = require(`../apiKey.json`);

const adminInit = admin.initializeApp({
     credential: admin.credential.cert(serviceAccountFile),
});

const firebaseApp = adminInit;
export const authAdmin = getAuth(firebaseApp);
