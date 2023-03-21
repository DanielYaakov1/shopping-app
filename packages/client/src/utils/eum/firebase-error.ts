export enum EFirebaseErrorAuthentication {
  EMAIL_ALREADY_IN_USE = 'Firebase: Error (auth/email-already-in-use).',
  INVALID_EMAIL = 'Firebase: Error (auth/invalid-email).',
  WEAK_PASSWORD = 'Firebase: Error (auth/weak-password).',
  USER_NOT_FOUND = 'Firebase: Error (auth/user-not-found).',
  INVALID_PASSWORD = 'Firebase: Error (auth/wrong-password).',
  SIGNUP_WEAK_PASSWORD = 'Firebase: Password should be at least 6 characters (auth/weak-password).',
}

const handleErrorFirebase = (error: string) => {
  let errorMessage = '';
  switch (error) {
    case EFirebaseErrorAuthentication.EMAIL_ALREADY_IN_USE:
      errorMessage =
        'This email address is already in use. Please try a different email address or sign in using this one.';
      break;
    case EFirebaseErrorAuthentication.INVALID_EMAIL:
      errorMessage = 'Invalid email address. Please check your email and try again.';
      break;
    case (EFirebaseErrorAuthentication.WEAK_PASSWORD,
    EFirebaseErrorAuthentication.SIGNUP_WEAK_PASSWORD):
      errorMessage = 'Password is too weak. Please choose a stronger password.';
      break;
    case EFirebaseErrorAuthentication.USER_NOT_FOUND:
      errorMessage = 'The email address not found. Please check your email and try again.';
      break;
    default:
      errorMessage = 'An unknown error occurred. Please try again later.';
      break;
  }
  return errorMessage;
};
