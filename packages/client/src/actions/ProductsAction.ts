import { Product } from './../interfaces/Product.interface';
import { setLoading } from '../store/slices/appSlice';
import { useDispatch } from 'react-redux';
//import { getProductByName } from './../../../server/src/api/controllers/products-controller';

export const getAllProductsAction = async (skip?: number, productPerPage?: number) => {
  try {
    const response = await fetch(`/api/v1/products?skip=${skip}&limit=${productPerPage}`);
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err, 'this is the error');
  }
};

export const getProductAction = () => {};

export const createProductAction = async () => {
  try {
    const response = await fetch('/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test',
        price: 111,
        description: 'test',
        image: 'test',
      }),
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err, 'this is the error');
  }
};
export const updateProductAction = () => {};
export const deleteProductAction = () => {};
export const getProductsByCategoryAction = () => {};

export const getProductByName = async (value: string) => {
  try {
    const response = await fetch(`/api/v1/products/${value}`);
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
};

export interface IPaginationResult {
  products: Product[];
  totalCount: number;
}
export const getProductPerPage = async (pageNumber: number, productPerPage?: string | number) => {
  //get productPerPage
  //const paginationItem = limitItem ? parseInt(limitItem) : 2;
  try {
    const response = await fetch('/api/v1/products/get-products-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: pageNumber,
        limit: productPerPage,
      }),
    });

    const { products, totalCount } = (await response.json()) as IPaginationResult;
    return { products, totalCount };
  } catch (err) {
    throw err;
  }
};
