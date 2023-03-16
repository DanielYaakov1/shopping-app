import { Product } from '../interfaces/Product.interface';
import { useDispatch } from 'react-redux';
import { setErrorMessageInProducts, setLoadingProducts } from '../store/slices/ProductSlice';
import { ROUTES } from '../utils/constants';
import useHttp from '../hooks/useHttp';
import { useCallback } from 'react';

const ProductsActions = () => {
  const dispatch = useDispatch();
  const { httpRequest } = useHttp();

  const getAllProducts = useCallback(
    async (skip?: number, productPerPage?: number) => {
      try {
        dispatch(setLoadingProducts(true));
        const response = await httpRequest(
          `${ROUTES.PRODUCTS_API}?skip=${skip}&limit=${productPerPage}`
        );
        return response;
      } catch (err: any) {
        dispatch(setErrorMessageInProducts(err));
      } finally {
        dispatch(setLoadingProducts(false));
      }
    },
    [dispatch, httpRequest]
  );

  const getProductAction = useCallback(async () => {}, []);

  const createProductAction = useCallback(async () => {
    //TODO : Move this end point to new http hook
    try {
      dispatch(setLoadingProducts(true));
      const response = await httpRequest(ROUTES.PRODUCTS_API, 'POST', {
        name: 'test',
        price: 111,
        description: 'test',
        image: 'test',
      });
      return response;
    } catch (err: any) {
      dispatch(setErrorMessageInProducts(err.message));
    } finally {
      dispatch(setLoadingProducts(false));
    }
  }, [dispatch, httpRequest]);
  const updateProductAction = useCallback(async () => {}, []);
  const deleteProductAction = useCallback(async () => {}, []);
  const getProductsByCategoryAction = useCallback(async () => {}, []);

  const getProductByName = useCallback(
    async (value: string) => {
      try {
        dispatch(setLoadingProducts(true));
        const response = await httpRequest(`${ROUTES.PRODUCTS_API}/${value}`);
        return response;
      } catch (err) {
        dispatch(setErrorMessageInProducts(err as string));
      } finally {
        dispatch(setLoadingProducts(false));
      }
    },
    [dispatch, httpRequest]
  );

  interface IPaginationResult {
    products: Product[];
    totalCount: number;
  }
  const getProductPerPage = useCallback(
    async (pageNumber: number, productPerPage?: string | number) => {
      //get productPerPage
      //const paginationItem = limitItem ? parseInt(limitItem) : 2;
      try {
        //dispatch(setLoadingProducts(true));
        const response = await httpRequest(ROUTES.PAGINATION_API, 'POST', {
          page: pageNumber,
          limit: productPerPage,
        });
        const { products, totalCount } = (await response) as IPaginationResult;
        return { products, totalCount };
      } catch (err) {
        throw err;
      } finally {
        //dispatch(setLoadingProducts(false));
      }
    },
    [httpRequest]
  );
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
