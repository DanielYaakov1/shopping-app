import { authAdmin } from '../../../server/src/firebaseAdmin';
export const getUser = async (uid: string) => {
  try {
    const user = await authAdmin.getUser(uid);
    return user;
  } catch (err) {
    throw err;
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    const user = await authAdmin.getUserByEmail(email);
    return user;
  } catch (err) {
    throw err;
  }
};
export const getUserByPhoneNumber = async (phoneNumber: string) => {
  try {
    const user = await authAdmin.getUserByPhoneNumber(phoneNumber);
    return user;
  } catch (err) {
    throw err;
  }
};

export const getUserByUid = async (uid: string) => {
  try {
    const user = await authAdmin.getUser(uid);
    return user;
  } catch (err) {
    throw err;
  }
};
