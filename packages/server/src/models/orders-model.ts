import mongoose from 'mongoose';
import { IOrder } from './../api/interfaces/interfaces';

export interface IFullAddressS {
  uId: string;
  city: string;
  lastName: string;
  firstName: string;
  address1: string;
  country: string;
  zip: string;
}

const orderSchema = new mongoose.Schema({
  uId: {
    type: String,
    required: [true, 'uId is missing'],
  },
  payment: {
    type: {
      cardName: String,
      cardNumber: String,
      expDate: String,
      cvv: String,
    },
    required: [true, 'Orders payment is missing'],
  },
  fullAddress: {
    type: {
      city: String,
      lastName: String,
      firstName: String,
      address1: String,
      country: String,
      zip: String,
    },
    required: [true, 'Orders fullAddress is missing'],
  },
  notes: {
    type: String,
    required: [false, 'Orders description is missing'],
  },
  shippingDate: {
    type: Date,
    required: [false, 'Orders date is missing'],
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
      return date.setUTCHours(date.getUTCHours());
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
