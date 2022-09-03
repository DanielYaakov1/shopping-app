import mongoose from 'mongoose';

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
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

export const Products = mongoose.model('products', productSchema);
