import { IAdmin } from '../api/interfaces/interfaces';
import mongoose from 'mongoose';

const adminsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Admin name is missing'],
  },
  uid: {
    type: String,
    required: [true, 'Admin uid is missing'],
  },
  role: {
    type: Number,
    required: [true, 'Admin role is missing'],
  },
});

export const Admins = mongoose.model<IAdmin>('admins', adminsSchema);
