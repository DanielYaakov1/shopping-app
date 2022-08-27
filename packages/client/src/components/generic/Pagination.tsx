import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import { getAllProductsAction, getPageAndProductCount } from '../../actions/ProductsAction';
import { setProduct } from '../../store/slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

export function MyPagination() {
  //TODO: split component
  const location = useLocation();
  const queryLocation = new URLSearchParams(location.search);
  const currentPage: number = parseInt(queryLocation.get('page') || '1', 10);
  const dispatch = useDispatch();
  const [userCount, setUserCount] = useState([0]);
  const [productsCount, setProductsCount] = useState([]);

  useEffect(() => {
    async function fetchPageProductNumber() {
      const products = await getPageAndProductCount(currentPage, 2);
      setUserCount(products);
      dispatch(setProduct(products));
    }
    fetchPageProductNumber();
  }, [dispatch, currentPage]);

  useEffect(() => {
    async function fetchAllProducts() {
      const products = await getAllProductsAction();
      setProductsCount(products);
    }
    fetchAllProducts();
  }, []);

  const getNumberPages = useCallback((): number => {
    const calculateNumberPagesDisplay = productsCount.length / userCount.length;
    return calculateNumberPagesDisplay;
  }, [productsCount.length, userCount.length]);

  return (
    <Pagination
      page={currentPage}
      count={getNumberPages()}
      renderItem={(item) => (
        <PaginationItem component={Link} to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`} {...item} />
      )}
    />
  );
}
