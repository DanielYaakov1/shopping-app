import { SortOrder } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { Products } from '../../models/products-model';
import { ProductHandler } from '../handlers/product-handler';

interface IQurey {
  skip: number;
  limit: number;
}

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // fetch query params
    // filter objects
    const { skip, limit } = req.query as unknown as IQurey;
    const productHandler = new ProductHandler();
    const products = await productHandler.getAllProducts(skip, limit);
    const totalCount = await productHandler.getProductsCount();
    res.json({
      products,
      totalCount,
    });
    res.status(200).send({ products });
  } catch (err) {
    next(err);
    // res.send(err);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Products.findById(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
    //res.send(err);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Products.create(req.body);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
    //res.send(err);
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
    //res.send(err);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.updateProduct(req.params.id, req.body);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
    //res.send(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.deleteProduct(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
    //res.send(err);
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
    //res.send(err);
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

//ask dave way this like this
//const productHandler = new ProductHandler();
//const products = await productHandler.getProductsCount()
