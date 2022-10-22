import React, { useEffect } from 'react';
import { LoggedInRouter, PublicRouter } from './components/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import ActionsAuth from './actions/auth';
import Spinner from './components/Spinner/Spinner';
import { getAllProductsAction } from './actions/ProductsAction';
import { setLoadingProducts, setProduct } from './store/slices/ProductSlice';

function App() {
  const { checkTokenIsExpired } = ActionsAuth();
  const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
  const getUser = useSelector((state: RootState) => state.userReducer.uid);
  const isLoading = useSelector((state: RootState) => state.appReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    checkTokenIsExpired();
  }, [checkTokenIsExpired]);

  useEffect(() => {
    async function fetchProductAndPage() {
      dispatch(setLoadingProducts(true));
      const { products } = await getAllProductsAction();
      dispatch(setProduct(products));
      dispatch(setLoadingProducts(false));
    }
    fetchProductAndPage();
  }, [dispatch, isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  return getUser && appAuthenticated ? <LoggedInRouter /> : <PublicRouter />;
}

export default App;
