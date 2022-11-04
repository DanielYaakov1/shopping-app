import ProductForm from '../../views/ProductForm/ProductForm';
import Product, { IProductProps } from '../Product/Product';
import Card from '../Card/Card';
import { ProductStyles } from '../../assets/style/components/ProductStyles';

const Products = ({ products, onAddToCartClicked }: any) => {
  const classes = ProductStyles();

  return products.map((product: IProductProps, i: number) => (
    <Card className={classes.card}>
      <Product
        key={i}
        name={product.name}
        price={product.price}
        image={product.image}
        description={product.description}
        productId={product._id}
        //document id mongodb It can't be any other name
        _id={product._id}
      />
      <ProductForm
        onAddToCart={(amount: number) => {
          onAddToCartClicked?.(product._id, amount, product.price, product.name);
        }}
        id={product._id}
      />
    </Card>
  ));
};
export default Products;
