import ProductForm from '../../views/ProductForm/ProductForm';
import Product, { IProductProps } from '../Product/Product';
import { ProductStyles } from '../../assets/style/components/ProductStyles';

const ProductsDetailsCard = ({ products, onAddToCartClicked }: any) => {
  const classes = ProductStyles();

  return products.map((product: IProductProps, i: number) => (
    <div className={classes.card}>
      <Product
        key={i}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
        _id={product._id}
      />
      <ProductForm
        onAddToCart={(amount: number) => {
          onAddToCartClicked?.(product._id, amount, product.price, product.name);
        }}
        id={product._id}
      />
    </div>
  ));
};
export default ProductsDetailsCard;
