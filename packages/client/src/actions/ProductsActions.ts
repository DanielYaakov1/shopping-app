import { Product } from '../interfaces/Product.interface';
import { useDispatch } from 'react-redux';
import { setLoadingProducts } from '../store/slices/ProductSlice';
//import { getProductByName } from './../../../server/src/api/controllers/products-controller';

const ProductsActions = () => {
  const dispatch = useDispatch();

  const getAllProducts = async (skip?: number, productPerPage?: number) => {
    try {
      dispatch(setLoadingProducts(true));
      const response = await fetch(`/api/v1/products?skip=${skip}&limit=${productPerPage}`);
      const resData = await response.json();
      dispatch(setLoadingProducts(false));
      return resData;
    } catch (err) {
      throw err;
    }
  };

  const getProductAction = () => {};

  const createProductAction = async () => {
    try {
      dispatch(setLoadingProducts(true));
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
      dispatch(setLoadingProducts(false));

      return resData;
    } catch (err) {
      throw err;
    }
  };
  const updateProductAction = () => {};
  const deleteProductAction = () => {};
  const getProductsByCategoryAction = () => {};

  const getProductByName = async (value: string) => {
    try {
      dispatch(setLoadingProducts(true));
      const response = await fetch(`/api/v1/products/${value}`);
      const resData = await response.json();
      dispatch(setLoadingProducts(false));
      return resData;
    } catch (err) {
      console.log(err);
    }
  };

  interface IPaginationResult {
    products: Product[];
    totalCount: number;
  }
  const getProductPerPage = async (pageNumber: number, productPerPage?: string | number) => {
    //get productPerPage
    //const paginationItem = limitItem ? parseInt(limitItem) : 2;
    try {
      dispatch(setLoadingProducts(true));
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
      dispatch(setLoadingProducts(false));
      const { products, totalCount } = (await response.json()) as IPaginationResult;
      return { products, totalCount };
    } catch (err) {
      throw err;
    }
  };
  return {
    getProductPerPage,
    getAllProducts,
    getProductAction,
    createProductAction,
    updateProductAction,
    deleteProductAction,
    getProductsByCategoryAction,
    getProductByName,
  };
};
export default ProductsActions;
