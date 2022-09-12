import { Products } from './products-model';
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, 'Orders city is missing'],
  },
  street: {
    type: String,
    required: [true, 'Orders street is missing'],
  },
  zipCode: {
    type: Number,
    required: [true, 'Orders zipCode is missing'],
  },
  notes: {
    type: String,
    required: [true, 'Orders description is missing'],
  },
  destinationDate: {
    type: Date,
    required: [true, 'Orders date is missing'],
  },
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: [true, 'Orders Items is missing'],
  },
  // type: Object,
  // required: [true, 'Orders Object is missing'],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Orders = mongoose.model('orders', orderSchema);
