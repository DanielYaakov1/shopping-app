import { Router } from 'express';
import { Products } from '../../models/products-model';
import { getAllProducts, getProductById, getProductByName } from '../controllers/products-controller';

export const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:name', getProductByName);
//productsRouter.post('/:name', getProductByName);
