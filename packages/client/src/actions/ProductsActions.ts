import { Product } from '../interfaces/Product.interface';
import { useDispatch } from 'react-redux';
import { setErrorMessageInProducts, setLoadingProducts } from '../store/slices/ProductSlice';
import { ROUTES } from '../utils/constants';
import HttpService from '../services/httpService';
//import { getProductByName } from './../../../server/src/api/controllers/products-controller';

const ProductsActions = () => {
  const dispatch = useDispatch();
  const { requestProtectedRoute } = HttpService();

  const getAllProducts = async (skip?: number, productPerPage?: number) => {
    try {
      dispatch(setLoadingProducts(true));
      const response = await requestProtectedRoute(
        `${ROUTES.PRODUCTS_API}?skip=${skip}&limit=${productPerPage}`
      );
      return response;
    } catch (err) {
      dispatch(setErrorMessageInProducts(err as string));
    } finally {
      dispatch(setLoadingProducts(false));
    }
  };

  const getProductAction = () => {};

  const createProductAction = async () => {
    //TODO : Move this end point to new http hook
    try {
      dispatch(setLoadingProducts(true));
      const response = await fetch(ROUTES.PRODUCTS_API, {
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
      const response = await requestProtectedRoute(`${ROUTES.PRODUCTS_API}/${value}`);
      return response;
    } catch (err) {
      dispatch(setErrorMessageInProducts(err as string));
    } finally {
      dispatch(setLoadingProducts(false));
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
