import Card from '../Card/Card';
import ProductForm from '../../views/ProductForm/ProductForm';
import { ProductStyles } from '../../assets/style/components/ProductStyles';

export interface IProductProps {
  _id: string;
  className?: string;
  onClick?: () => void;
  name: string;
  description?: string;
  image: string;
  price: number;
  productId: string;
  onAddToCartClicked?: (productId: string, amount: number, price: number, name: string) => void;
  classes1?: {
    cardContent: string;
  };
}

const Product = ({
  name,
  description,
  price,
  image,
  productId,
  onClick,
  onAddToCartClicked,
  classes1,
}: IProductProps) => {
  const classes = ProductStyles();

  return (
    <div>
      <h3 className={classes.title}>Name: {name}</h3>
      <p className={classes.description}>Description: {description}</p>
      <p className={classes.price}>Price: {price.toFixed(2)}</p>
      <div>
        <img className={classes.image} src={image} alt={name} />
      </div>
    </div>
  );
};
export default Product;
