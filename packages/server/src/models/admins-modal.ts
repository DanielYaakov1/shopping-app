import mongoose from 'mongoose';

import { IAdmin } from '../api/interfaces/interfaces';

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
