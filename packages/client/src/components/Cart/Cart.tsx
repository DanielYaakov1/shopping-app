import { useDispatch } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CartItem from '../CartItem/CartItem';
import { memo } from 'react';
import { IItems } from '../../store/slices/cartSlice';
import { Button } from '@material-ui/core';
import { setCheckoutOpen } from '../../store/slices/orderSlice';

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
export type propsCart = {
  items: IItems[];
  totalAmount: number;
  checkIfTheCardIsEmpty: () => boolean;
  handleIncreaseItem: any;
  handleDecreaseItem: any;
  labelButtonCheckout: string;
};

const Cart = memo(
  ({
    items,
    totalAmount,
    checkIfTheCardIsEmpty,
    handleIncreaseItem,
    handleDecreaseItem,
    labelButtonCheckout,
  }: propsCart) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
      <div className={classes.cartItems}>
        <ul className={classes.cartItemList}>
          {items.map((item: IItems, i: number) => (
            <CartItem
              key={i}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAddToCart={handleIncreaseItem.bind(null, item)}
              onRemoveToCart={handleDecreaseItem.bind(null, item._id)}
            />
          ))}
        </ul>
        <div className={classes.totalAmount}>
          <span>Total Price: </span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        {checkIfTheCardIsEmpty() ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              dispatch(setCheckoutOpen(true));
            }}>
            {labelButtonCheckout}
          </Button>
        ) : null}
      </div>
    );
  }
);
export default Cart;
