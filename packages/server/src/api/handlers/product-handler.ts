import { Products } from '../../models/products-model';
import { ProductActions, ProductProps } from '../interfaces/interfaces';

export class ProductHandler implements ProductActions {
     async getAllProducts() {
          // TODO
          const getProducts = await Products.find();
          return getProducts as ProductProps[];
     }
     async getProductById(id: string) {
          // TODO
          const getProductById1 = await Products.findById(id);
          //return { id: getProductById1 };
          return getProductById1 as ProductProps;
     }
     async createProduct(product: ProductProps) {
          // TODO
          const createProduct = await Products.create(product);
          return createProduct as ProductProps;
     }
     async getProductByName(productName: string) {
          // TODO
          const getProductName = await Products.findOne({ name: productName });
          return getProductName as ProductProps;
          //return { name: getProductName };
     }
}
