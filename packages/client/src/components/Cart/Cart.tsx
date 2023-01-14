import CartItem from '../CartItem';
import { memo } from 'react';
import { IItems } from '../../store/slices/cartSlice';
import { Button } from '@material-ui/core';
import { useStyles } from './useStyles';

export type propsCart = {
  items: IItems[];
  totalAmount: number;
  checkIfTheCardIsEmpty: () => boolean;
  handleIncreaseItem: any;
  handleDecreaseItem: any;
  labelButtonCheckout: string;
  onClickCheckOutButton: () => void;
};

const Cart = memo(
  ({
    items,
    totalAmount,
    checkIfTheCardIsEmpty,
    handleIncreaseItem,
    handleDecreaseItem,
    labelButtonCheckout,
    onClickCheckOutButton,
  }: propsCart) => {
    const classes = useStyles();

    return (
      <div className={classes.cartItems}>
        <ul className={classes.cartItemList}>
          {items.map((item: IItems, index: number) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAddToCart={handleIncreaseItem.bind(null, item)}
              onRemoveToCart={handleDecreaseItem.bind(null, item.productId)}
            />
          ))}
        </ul>
        <div className={classes.totalAmount}>
          <span>Total Price: </span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
        {checkIfTheCardIsEmpty() ? (
          <Button variant="outlined" color="primary" onClick={onClickCheckOutButton}>
            {labelButtonCheckout}
          </Button>
        ) : null}
      </div>
    );
  }
);
export default Cart;
