import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MyPagination } from '../Pagination/Pagination';
import PaginationLink from '../Pagination/PaginationLink';
import Products from '../Products/Products';

export type productGridProps = {
  className: string;
  children?: React.ReactNode;
};

const ProductGrid = memo(({ className }: productGridProps) => {
  const products = useSelector((state: RootState) => state.productReducer.products);

  return (
    <div className={className}>
      <Products products={products}></Products>
    </div>
  );
});

export default ProductGrid;

// <PaginationLink>
//   <MyPagination />
// </PaginationLink>
