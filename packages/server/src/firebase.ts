import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: 'AIzaSyDpgpHA6l7LhbqUh63U6Wbr46zX6HFhEcY',
     authDomain: 'shopping-app-1422b.firebaseapp.com',
     projectId: 'shopping-app-1422b',
     storageBucket: 'shopping-app-1422b.appspot.com',
     messagingSenderId: '1023993950164',
     appId: '1:1023993950164:web:6679f5f952ea63b9823041',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
