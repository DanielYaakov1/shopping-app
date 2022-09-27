import React, { useEffect } from 'react';
import { LoggedInRouter, PublicRouter } from './components/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import ActionsAuth from './actions/auth';
import Spinner from './components/Spinner/Spinner';
import { getAllProductsAction } from './actions/ProductsAction';
import { setProduct } from './store/slices/ProductSlice';

function App() {
  const { checkTokenIsExpired } = ActionsAuth();
  const appAuthenticated = useSelector((state: RootState) => state.appReducer.isAppAuthenticated);
  const getUser = useSelector((state: RootState) => state.appReducer.user);
  const isLoading = useSelector((state: RootState) => state.appReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    checkTokenIsExpired();
  }, [checkTokenIsExpired]);

  useEffect(() => {
    async function fetchProductAndPage() {
      const { products, totalCount } = await getAllProductsAction();
      dispatch(setProduct(products));
    }
    fetchProductAndPage();
  }, [dispatch]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return getUser && appAuthenticated ? <LoggedInRouter /> : <PublicRouter />;
}

export default App;
