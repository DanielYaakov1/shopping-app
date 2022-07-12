//import { initializeApp } from 'firebase/app';
//import { initializeApp } from 'firebase-admin/app';
//import { getAuth } from 'firebase/auth';
import { getAuth } from 'firebase-admin/auth';
import admin from 'firebase-admin';
//const admin = require('firebase-admin');

const serviceAccountFile = require(`../apiKey.json`);

const adminInit = admin.initializeApp({
     credential: admin.credential.cert(serviceAccountFile),
});

const firebaseApp = adminInit;
export const authAdmin = getAuth(firebaseApp);
