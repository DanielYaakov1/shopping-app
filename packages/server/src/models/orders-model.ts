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
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: [true, 'Orders Items is missing'],
      },
      amount: {
        type: Number,
        String,
        required: [true, 'Orders Items is missing'],
      },
    },
  ],

  createdAt: {
    type: Date,
    default: () => {
      const date = new Date(Date.now());
      return date.setUTCHours(date.getUTCHours() + 2);
      //return date.toLocaleDateString();
      //return date.toLocaleString();
    },
  },
  totalPrice: {
    type: Number,
    required: [true, 'Orders totalPrice is missing'],
  },
  amountItems: {
    type: Number,
    required: [false, 'Item amount is missing'],
  },
  orderNumber: {
    type: Number,
    default: () => {
      const timestamp = new Date().getTime();
      return timestamp + Math.floor(Math.random() * 1000000);
    },
  },
  status: {
    type: String,
    enum: ['created', 'processing', 'completed'],
    default: 'created',
  },
});

export const Orders = mongoose.model<IOrder>('orders', orderSchema);
