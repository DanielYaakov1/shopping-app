import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import { getProductPerPage } from '../../actions/ProductsAction';
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
    async function fetchPageProductNumber() {
      const { products, totalCount } = await getProductPerPage(currentPage, limitProductsPerPage);
      setTotalCountPage(totalCount);
      dispatch(setProduct(products));
    }
    fetchPageProductNumber();
  }, [dispatch, currentPage]);

  // useEffect(() => {
  //   //move this line to app.tsx
  //   async function fetchAllProducts() {
  //     const products = await getAllProductsAction();
  //     setProductsCount(products);
  //   }
  //   fetchAllProducts();
  // }, []);

  const getNumberPages = useCallback((): number => {
    const calculateNumberPagesDisplay = totalCountPage / limitProductsPerPage;
    return Math.ceil(calculateNumberPagesDisplay);
  }, [totalCountPage]);

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
