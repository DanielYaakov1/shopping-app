import { Router } from 'express';
import { Products } from '../../models/products-model';
import { getAllProducts, getProductById, getProductByName, createProduct } from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:name', getProductByName);
productsRouter.post('/', createProduct);
//productsRouter.post('/:name', getProductByName);
