import { EFirebaseErrorAuthentication } from '../../utils/eum/firebase-error';

interface IFirebaseErrorMap {
  [key: string]: string;
}

export const firebaseErrors: IFirebaseErrorMap = {
  [EFirebaseErrorAuthentication.EMAIL_ALREADY_IN_USE]:
    'This email address is already in use. Please try a different email address or sign in using this one.',
  [EFirebaseErrorAuthentication.INVALID_EMAIL]:
    'Invalid email address. Please check your email and try again.',
  [EFirebaseErrorAuthentication.WEAK_PASSWORD]:
    'Password is too weak. Please choose a stronger password .',
  [EFirebaseErrorAuthentication.USER_NOT_FOUND]:
    'The email address not found. Please check your email and try again.',
  [EFirebaseErrorAuthentication.INVALID_PASSWORD]:
    'Incorrect password. Please check your password and try again.',
};
