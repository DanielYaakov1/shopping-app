import { Router } from 'express';
import { Products } from '../../models/products-model';
import { getAllProducts } from '../controllers/products-controller';

export const productsRouter = Router();

// productsRouter.get('/', async (req, res) => {
//      const products = await Products.find();
//      console.log(products);
//      res.send(products);
// });

productsRouter.get('/', getAllProducts);
