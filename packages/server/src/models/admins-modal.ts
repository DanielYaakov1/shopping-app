import { IAdmin } from '../api/interfaces/interfaces';
import mongoose from 'mongoose';

const adminsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Admin email is missing'],
  },
  uid: {
    type: String,
    required: [false, 'Admin uid is missing'],
  },
});

export const Admins = mongoose.model<IAdmin>('admins', adminsSchema);
