import { Router } from 'express';
import { requireAuth } from '../../middleware/requireAuth';
import { Products } from '../../models/products-model';
import {
  getAllProducts,
  getProductById,
  getProductByName,
  createProduct,
  sortingProductByPrice,
  getProductsCount,
} from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/get-products-count', getProductsCount);
productsRouter.post('/create-product', createProduct);

productsRouter.get('/test/test', function (req, res) {
  const getProductsCount = Products.count({});
  console.log('count item ' + getProductsCount);
  res.json(getProductsCount);
});

//productsRouter.post('/:name', getProductByName);
//productsRouter.get('/a/:sort', sortingProductByPrice);
