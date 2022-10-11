import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #8a2b06',
      padding: '1rem 0',
      margin: '1rem 0',
      '& button': {
        font: 'inherit',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#8a2b06',
        border: '1px solid #8a2b06',
        width: '2rem',
        textAlign: 'center',
        borderRadius: 6,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        marginLeft: '1rem',
        margin: '0.25rem',
      },
      '& button:active': {
        color: 'white',
        backgroundColor: '#8a2b06',
      },
    },

    summary: {
      width: '10rem',
      display: ' flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontWeight: 'bold',
      color: ' #8a2b06',
    },
  })
);

export interface ICartItem {
  name: string;
  price: number;
  amount: number;
  onAddToCart: () => void;
  onRemoveToCart: () => void;
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
