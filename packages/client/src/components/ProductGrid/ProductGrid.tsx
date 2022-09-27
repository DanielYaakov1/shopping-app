import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MyPagination } from '../Pagination/Pagination';
import PaginationLink from '../Pagination/PaginationLink';
import Products from '../Products/Products';

const ProductGrid = memo(() => {
  const products = useSelector((state: RootState) => state.productReducer.products);

  return (
    // <PaginationLink>
    //   <MyPagination />
    // </PaginationLink>

    <Products products={products}></Products>
  );
});

export default ProductGrid;
