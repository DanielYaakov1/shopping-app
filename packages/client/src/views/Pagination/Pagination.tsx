import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import { getAllProductsAction } from '../../actions/ProductsAction';
import { setProduct } from '../../store/slices/ProductSlice';
import { useDispatch } from 'react-redux';

export function MyPagination() {
  //TODO: split component
  const location = useLocation();
  const queryLocation = new URLSearchParams(location.search);
  const currentPage: number = parseInt(queryLocation.get('page') || '1', 10);
  const [totalCountPage, setTotalCountPage] = useState(1);
  const dispatch = useDispatch();
  const limitProductsPerPage: number = 2;

  useEffect(() => {
    async function fetchProductAndPage() {
      const { products, totalCount } = await getAllProductsAction(
        (currentPage - 1) * limitProductsPerPage,
        limitProductsPerPage
      );
      setTotalCountPage(totalCount);
      dispatch(setProduct(products));
    }
    fetchProductAndPage();
  }, [dispatch, currentPage]);

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
