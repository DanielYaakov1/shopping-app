import Product, { IProductProps } from '../Product/Product';

const Products = ({ products }: any) => {
  return products.map((product: IProductProps, i: number) => (
    <Product
      key={i}
      name={product.name}
      price={product.price}
      image={product.image}
      description={product.description}
      _id={product._id}
    />
  ));
};
export default Products;
