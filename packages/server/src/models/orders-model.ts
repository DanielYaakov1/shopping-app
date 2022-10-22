import mongoose from 'mongoose';

import { IOrder } from './../api/interfaces/interfaces';

const orderSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, 'Orders city is missing'],
  },
  street: {
    type: String,
    required: [true, 'Orders street is missing'],
  },
  uId: {
    type: String,
    required: [true, 'uId is missing'],
  },
  zipCode: {
    type: Number,
    required: [true, 'Orders zipCode is missing'],
  },
  notes: {
    type: String,
    required: [false, 'Orders description is missing'],
  },
  shippingDate: {
    type: Date,
    required: [true, 'Orders date is missing'],
  },
  items: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'products',
    required: [true, 'Orders Items is missing'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Orders = mongoose.model<IOrder>('orders', orderSchema);
