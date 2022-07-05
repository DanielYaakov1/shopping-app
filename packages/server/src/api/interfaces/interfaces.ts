import { UserCredential } from 'firebase/auth';

export interface Authenticator {
     login: (email: string, password: string) => Promise<User>;
     register: (email: string, password: string) => Promise<User>;
}

export type User = {
     token: string;
     id: string;
};
