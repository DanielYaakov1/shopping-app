import { authAdmin } from '../../../server/src/firebaseAdmin';
export const getUser = async (uid: string) => {
     const user = await authAdmin.getUser(uid);
     return user;
};
export const getUserByEmail = async (email: string) => {
     const user = await authAdmin.getUserByEmail(email);
     return user;
};
export const getUserByPhoneNumber = async (phoneNumber: string) => {
     const user = await authAdmin.getUserByPhoneNumber(phoneNumber);
     return user;
};

export const getUserByUid = async (uid: string) => {
     const user = await authAdmin.getUser(uid);
     return user;
};
