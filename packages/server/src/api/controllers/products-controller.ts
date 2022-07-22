import type { Request, Response } from 'express';
import { Products } from '../../models/products-model';

// productsRouter.get('/', async (req, res) => {
//      const products = await Products.find();
//      console.log(products);
//      res.send(products);
// });

export const getAllProducts = async (req: Request, res: Response) => {
     const products = await Products.find();
     console.log(products);
     res.send(products);
};

export const getProductById = async (req: Request, res: Response) => {
     const product = await Products.findById(req.params.id);
     console.log(product);
     res.send(product);
};

export const createProduct = async (req: Request, res: Response) => {
     const product = await Products.create(req.body);
     console.log(product);
     res.send(product);
};
