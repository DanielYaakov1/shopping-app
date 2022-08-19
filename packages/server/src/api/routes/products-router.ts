import { Router } from 'express';
import { Products } from '../../models/products-model';
import { getAllProducts, getProductById, getProductByName, createProduct, sortingProductByPrice } from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/', createProduct);
productsRouter.get('/:sort', sortingProductByPrice);
//productsRouter.post('/:name', getProductByName);
