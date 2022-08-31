import { SortOrder } from 'mongoose';
import type { Request, Response } from 'express';
import { Products } from '../../models/products-model';
import { ProductHandler } from '../handlers/product-handler';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const productHandler = new ProductHandler();
    const products = await productHandler.getAllProducts();
    res.send(products);
  } catch (err) {
    res.send(err);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Products.findById(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Products.create(req.body);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const getProductByName = async (req: Request, res: Response) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.getProductsByName(req.params.name);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.updateProduct(req.params.id, req.body);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.deleteProduct(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const sortingProductByPrice = async (req: Request, res: Response) => {
  try {
    const productHandler = new ProductHandler();
    const product = await productHandler.sortingProductByPrice(req.params.price as SortOrder);
    console.log(product);
    res.send(product);
  } catch (err) {
    res.send(err);
  }
};

export const getProductsCount = async (req: Request, res: Response) => {
  try {
    const limit = req.body.limit ? parseInt(req.body.limit) : 10;
    const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
    const products = await Products.find({})
      .skip((pageNumber - 1) * limit)
      .limit(limit);
    console.log(products);
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
};

//ask dave way this like this
//const productHandler = new ProductHandler();
//const products = await productHandler.getProductsCount()