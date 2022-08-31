import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CartItem } from './CartItem';
import { memo } from 'react';
import { addItemToCart, deleteItemFromCart, IItems } from '../../store/slices/cartSlice';

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

const Cart = memo(() => {
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const totalAmount = useSelector((state: RootState) => state.cartReducer.totalAmount);
  const handleIncreaseItem = (item: IItems) => dispatch(addItemToCart({ ...item, amount: 1 }));
  const handleDecreaseItem = (_id: string) => dispatch(deleteItemFromCart(_id));
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.cartItems}>
      <ul style={{ listStyleType: 'none' }}>
        {items.map((item: IItems, i: any) => (
          <CartItem
            key={item._id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAddToCart={handleIncreaseItem.bind(null, item)}
            onRemoveToCart={handleDecreaseItem.bind(null, item._id)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.totalAmount}>
        <span>Total Amount:</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
});
export default Cart;
