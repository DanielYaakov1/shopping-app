import { SortOrder } from 'mongoose';

import { Products } from '../../models/products-model';
import { IProductProps } from '../interfaces/interfaces';

export class ProductHandler {
  async getAllProducts(skip: number, limit: number): Promise<IProductProps[]> {
    return Products.find().skip(skip).limit(limit);
  }
  async getProductById(_id: string): Promise<IProductProps | null> {
    return Products.findById(_id);
  }
  async createProduct(product: IProductProps): Promise<IProductProps> {
    return Products.create(product);
  }
  async getProductsByName(productName: string): Promise<IProductProps[]> {
    return Products.find({ name: { $regex: productName, $options: 'i' } });
  }
  async updateProduct(_id: string, product: IProductProps): Promise<IProductProps | null> {
    return Products.findByIdAndUpdate(_id, product, { new: true });
  }
  async deleteProduct(id: string): Promise<IProductProps | null> {
    return Products.findByIdAndDelete(id);
  }
  async getProductByPrice(price: number): Promise<IProductProps[]> {
    return Products.find({ price: { $gte: price } });
  }

  async sortingProductByPrice(price: SortOrder): Promise<IProductProps[]> {
    return Products.find().sort({ price: price });
  }

  async getProductsCount(): Promise<number> {
    return Products.count({});
  }
}
