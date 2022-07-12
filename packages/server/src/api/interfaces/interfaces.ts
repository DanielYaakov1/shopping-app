import { UserCredential } from 'firebase/auth';
import {} from 'firebase-admin/auth';

export interface Authenticator {
     login: (email: string, password: string) => Promise<User>;
     register: (email: string, password: string) => Promise<User>;
}

export type User = {
     token?: string;
     id: string;
};
