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
});

export const Products = mongoose.model('products', productSchema);
