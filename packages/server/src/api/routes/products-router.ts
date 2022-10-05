import { Router } from 'express';
import { Products } from '../../models/products-model';
import {
  getAllProducts,
  getProductByName,
  createProduct,
  sortingProductByPrice,
  getProductsPerPage,
  updateProduct,
  deleteProduct,
} from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/sort', sortingProductByPrice);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/get-products-count', getProductsPerPage);
//delete row 17-19
productsRouter.get('/', getAllProducts);
productsRouter.post('/', createProduct);
productsRouter.put('/', updateProduct);
productsRouter.delete('/', deleteProduct);

productsRouter.get('/test/test', async function (req, res) {
  const getProductsCount = await Products.count({});
  console.log('count item ' + getProductsCount);
  res.send({ getProductsCount });
});

//productsRouter.post('/:name', getProductByName);
