import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import { Products } from '../../models/products-model';
import {
  getAllProducts,
  getProductById,
  getProductByName,
  createProduct,
  sortingProductByPrice,
  getProductsPerPage,
} from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/sort', sortingProductByPrice);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/get-products-count', getProductsPerPage);
productsRouter.get('/', getAllProducts);
productsRouter.post('/', createProduct);

productsRouter.get('/test/test', async function (req, res) {
  const getProductsCount = await Products.count({});
  console.log('count item ' + getProductsCount);
  res.send({ getProductsCount });
});

//productsRouter.post('/:name', getProductByName);
