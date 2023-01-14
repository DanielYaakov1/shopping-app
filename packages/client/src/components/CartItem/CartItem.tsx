import { memo } from 'react';
import { useStyles } from './useStyles';

export interface ICartItem {
  name: string;
  price: number;
  amount: number;
  onAddToCart?: () => void;
  onRemoveToCart?: () => void;
  style?: string;
}

const CartItem = memo((props: ICartItem) => {
  const classes = useStyles();
  return (
    <li>
      <div className={classes.cartItem}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{props.price}</span>
            <span>x{props.amount}</span>
          </div>
        </div>
        <div>
          <button onClick={props.onAddToCart}>+</button>
          <button onClick={props.onRemoveToCart}>-</button>
        </div>
      </div>
    </li>
  );
});
export default CartItem;
