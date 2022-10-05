import { useDispatch } from 'react-redux';
import Product, { IProductProps } from '../Product/Product';

const Products = ({ products }: any) => {
  const dispatch = useDispatch();

  return products.map((product: IProductProps, i: number) => (
    <Product
      key={i}
      name={product.name}
      price={product.price}
      image={product.image}
      description={product.description}
      _id={product._id}></Product>
  ));
};
export default Products;
