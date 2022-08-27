import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Product, { IProductProps } from './Product';
import { CartItem } from './CartItem';

const useStyles = makeStyles(() =>
  createStyles({
    totalAmount: {
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'space-between',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      margin: '1rem 0',
    },
    cartItems: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      maxHeight: '20rem',
      overflow: 'scroll',
    },
  })
);

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const totalAmount = useSelector((state: RootState) => state.cartReducer.totalAmount);
  //const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.cartItems}>
      <CartItem items={items}></CartItem>
      <div className={classes.totalAmount}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
    </div>
  );
};
export default Cart;
