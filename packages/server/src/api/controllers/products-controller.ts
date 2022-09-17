import { SortOrder } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { Products } from '../../models/products-model';
import { ProductHandler } from '../handlers/product-handler';

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { skip, limit } = req.query;
    const productHandler = new ProductHandler();
    const parsedSkip = Number(skip);
    const parsedLimit = Number(limit);
    const [products, totalCount] = await Promise.all([
      productHandler.getAllProducts(parsedSkip, parsedLimit),
      productHandler.getProductsCount(),
    ]);
    res.send({ products, totalCount });
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Products.findById(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Products.create(req.body);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export const getProductByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.getProductsByName(req.params.name);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const { _id } = req.body;
    const product = await productHandler.updateProduct(_id, req.body);
    console.log(product);
    product ? res.send(product) : res.status(400).send({ message: 'No such user exists' });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const { _id } = req.body;
    const product = await productHandler.deleteProduct(_id);
    console.log(product);
    product
      ? res.send({ message: 'The product has been successfully deleted ', product })
      : res.status(400).send({ message: 'No such user exists' });
  } catch (err) {
    next(err);
  }
};

export const sortingProductByPrice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const { sort } = req.query;
    const product = await productHandler.sortingProductByPrice(sort as SortOrder);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export const getProductsPerPage = async (req: Request, res: Response) => {
  try {
    const limit = req.body.limit ? parseInt(req.body.limit) : 10;
    const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
    const products = await Products.find({})
      .skip((pageNumber - 1) * limit)
      .limit(limit);
    const resultCount = await Products.aggregate([
      {
        $group: {
          _id: null,
          count: {
            $count: {},
          },
        },
      },
    ]);

    res.status(200).send({ totalCount: resultCount[0].count, products });
  } catch (err) {
    res.status(400).send(err);
  }
};
