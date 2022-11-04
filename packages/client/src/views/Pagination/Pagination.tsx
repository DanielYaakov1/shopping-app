import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import { useDispatch } from 'react-redux';

export function MyPagination() {
  //TODO: split component
  const location = useLocation();
  const { getAllProducts } = ProductsActions();
  const queryLocation = new URLSearchParams(location.search);
  const currentPage: number = parseInt(queryLocation.get('page') || '1', 10);
  const [totalCountPage, setTotalCountPage] = useState(1);
  const dispatch = useDispatch();
  const limitProductsPerPage: number = 2;

  const fetchProductAndPage = useCallback(async () => {
    const { products, totalCount } = await getAllProducts(
      (currentPage - 1) * limitProductsPerPage,
      limitProductsPerPage
    );
    setTotalCountPage(totalCount);
    dispatch(setProduct(products));
  }, [currentPage, dispatch, getAllProducts]);

  useEffect(() => {
    fetchProductAndPage();
  }, [dispatch, currentPage, fetchProductAndPage]);

  const getCountPages = useCallback((): number => {
    const calculateNumberPagesDisplay = totalCountPage / limitProductsPerPage;
    return Math.ceil(calculateNumberPagesDisplay);
  }, [totalCountPage]);

  return (
    <Pagination
      page={currentPage}
      count={getCountPages()}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}
