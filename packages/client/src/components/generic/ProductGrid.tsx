import { MyPagination } from './Pagination';
import PaginationLink from './PaginationLink';
import Products from './Products';

const ProductGrid = () => {
  return (
    <div>
      <PaginationLink>
        <MyPagination />
      </PaginationLink>
      <Products></Products>
    </div>
  );
};

export default ProductGrid;
