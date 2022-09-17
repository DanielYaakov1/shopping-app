import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem';
import { memo, useCallback, useState } from 'react';
import { addItemToCart, deleteItemFromCart, IItems } from '../../store/slices/cartSlice';
import { Button } from '@material-ui/core';
import { setPurchaseModal } from '../../store/slices/orderSlice';

const useStyles = makeStyles(() =>
  createStyles({
    totalAmount: {
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'space-between',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      margin: '1rem 0',
      color: '#4e4c4b',
    },
    cartItems: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      maxHeight: '20rem',
      overflow: 'scroll',
    },
    cartItemList: {
      listStyleType: 'none',
      color: '#4e4c4b',
    },
  })
);

const Cart = memo(() => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const totalAmount = useSelector((state: RootState) => state.cartReducer.totalAmount);
  const checkCartItemsCount = useCallback(() => items.length > 0, [items.length]);
  const handleIncreaseItem = useCallback((item: IItems) => dispatch(addItemToCart({ ...item, amount: 1 })), [dispatch]);
  const handleDecreaseItem = useCallback((id: string) => dispatch(deleteItemFromCart(id)), [dispatch]);
  const classes = useStyles();

  return (
    <div className={classes.cartItems}>
      <ul className={classes.cartItemList}>
        {items.map((item: IItems, i: any) => (
          <CartItem
            key={i}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAddToCart={handleIncreaseItem.bind(null, item)}
            onRemoveToCart={handleDecreaseItem.bind(null, item._id)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.totalAmount}>
        <span>Total Amount: </span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      {checkCartItemsCount() ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            dispatch(setPurchaseModal(true));
          }}
        >
          Buy Now
        </Button>
      ) : null}
    </div>
  );
});
export default Cart;
