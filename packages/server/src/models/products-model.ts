import mongoose from 'mongoose';

import { IProductProps } from '../api/interfaces/interfaces';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is missing'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is missing'],
  },
  description: {
    type: String,
    required: [true, 'Product description is missing'],
  },
  image: {
    type: String,
    required: [true, 'Product image is missing'],
  },
});

export const Products = mongoose.model<IProductProps>('products', productSchema);
