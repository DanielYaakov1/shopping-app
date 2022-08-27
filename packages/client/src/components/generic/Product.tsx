import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Card from './Card';
import ProductForm from './ProductForm';
import { addItem } from '../../store/slices/cartSlice';

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
  id?: string | number;
}

const Product = ({ name, description, price, image, id }: IProductProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddToCart = (amount: string) => {
    dispatch(addItem({ name, description, price, image, id, amount }));
    console.log('add to cart');
  };

  return (
    <Card>
      <div style={{}}>
        <h3 className={classes.title}>Name: {name}</h3>
        <p className={classes.description}>Description: {description}</p>
        <p className={classes.price}>Price: {price}</p>
        <div>
          <img className={classes.image} src={image} alt={name} />
        </div>
      </div>
      <div>
        <ProductForm onAddToCart={handleAddToCart} id={id} />
      </div>
    </Card>
  );
};
export default Product;
