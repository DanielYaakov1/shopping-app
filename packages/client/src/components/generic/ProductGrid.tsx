import { memo } from 'react';
import { MyPagination } from './Pagination';
import PaginationLink from './PaginationLink';
import Products from './Products';

const ProductGrid = memo(() => {
  return (
    <div>
      <PaginationLink>
        <MyPagination />
      </PaginationLink>
      <Products></Products>
    </div>
  );
});

export default ProductGrid;
