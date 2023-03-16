import { getProductByName } from './../controllers/products-controller';
import { Router } from 'express';

import { Products } from '../../models/products-model';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsPerPage,
} from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.post('/get-products-count', getProductsPerPage);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/', createProduct);
productsRouter.put('/', updateProduct);
productsRouter.delete('/', deleteProduct);

productsRouter.get('/test/test', async function (req, res) {
  const getProductsCount = await Products.count({});
  res.send({ getProductsCount });
});
