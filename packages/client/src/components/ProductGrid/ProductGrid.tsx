import { memo } from 'react';

export type productGridProps = {
  className: string;
  children: React.ReactNode;
};

const ProductGrid = memo(({ className, children }: productGridProps) => {
  return <div className={className}>{children}</div>;
});

export default ProductGrid;
