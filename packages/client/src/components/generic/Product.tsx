import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Card from './Card';
import ProductForm from './ProductForm';
import { addItemToCart } from '../../store/slices/cartSlice';
import { useCallback } from 'react';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '75%',
    height: '60%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
  title: {
    color: theme.palette.primary.light,
  },
  description: {
    color: theme.palette.primary.light,
    fontStyle: 'italic',
    maxWidth: '100%',
    maxHeight: 'auto',
  },
  price: {
    color: theme.palette.primary.light,
  },
}));

export interface IProductProps {
  className?: string;
  onClick?: () => void;
  name: string;
  description?: string;
  image?: string;
  price: number;
  _id?: string | number;
}

const Product = ({ name, description, price, image, _id }: IProductProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (amount: string) => {
      dispatch(addItemToCart({ name, description, price, image, _id, amount }));
      console.log('add to cart');
    },
    [_id, description, dispatch, image, name, price]
  );

  return (
    <Card>
      <div>
        <h3 className={classes.title}>Name: {name}</h3>
        <p className={classes.description}>Description: {description}</p>
        <p className={classes.price}>Price: {price.toFixed(2)}</p>
        <div>
          <img className={classes.image} src={image} alt={name} />
        </div>
      </div>
      <div>
        <ProductForm onAddToCart={handleAddToCart} id={_id} />
      </div>
    </Card>
  );
};
export default Product;
