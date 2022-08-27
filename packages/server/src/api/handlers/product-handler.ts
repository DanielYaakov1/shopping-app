import { SortOrder } from 'mongoose';
import { Products } from '../../models/products-model';
import { IProductProps } from '../interfaces/interfaces';

export class ProductHandler {
  async getAllProducts(): Promise<IProductProps[]> {
    const getProducts = await Products.find();
    return getProducts as IProductProps[];
  }
  async getProductById(_id: string): Promise<IProductProps> {
    const getProductById = await Products.findById(_id);
    return getProductById as IProductProps;
  }
  async createProduct(product: IProductProps): Promise<IProductProps> {
    const createProduct = await Products.create(product);
    return createProduct as IProductProps;
  }
  async getProductsByName(productName: string): Promise<IProductProps[]> {
    const getProductsName = await Products.find({ name: { $regex: productName, $options: 'i' } });
    return getProductsName as IProductProps[];
  }
  async updateProduct(_id: string, product: IProductProps): Promise<IProductProps> {
    const updateProduct = await Products.findByIdAndUpdate(_id, product, { new: true });
    return updateProduct as IProductProps;
  }
  async deleteProduct(_id: string): Promise<IProductProps> {
    const deleteProduct = await Products.findByIdAndDelete(_id);
    return deleteProduct as IProductProps;
  }
  async getProductByPrice(price: number): Promise<IProductProps[]> {
    const getProductByPrice = await Products.find({ price: { $gte: price } });
    return getProductByPrice as IProductProps[];
  }

  async sortingProductByPrice(price: SortOrder): Promise<IProductProps[]> {
    const sortingProductByPrice = await Products.find().sort({ price: price });
    return sortingProductByPrice as IProductProps[];
  }

  async getProductsCount(): Promise<any> {
    //const getProducts = await Products.find({});
    const getProductsCount = await Products.count({});
    console.log('count item ' + getProductsCount);
    //return getProducts as IProductProps[];
    return getProductsCount;
  }
}
