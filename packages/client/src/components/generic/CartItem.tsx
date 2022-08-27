import { IItems } from '../../store/slices/cartSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #8a2b06',
      padding: '1rem 0',
      margin: '1rem 0',
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

export type props = {
  items: IItems[];
};

export function CartItem(props: { items: IItems[] }) {
  const classes = useStyles();
  return (
    <li>
      {props.items.map((item: IItems, i: any) => (
        <div className={classes.cartItem}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{item.price}</span>
              <span>x{item.amount}</span>
            </div>
          </div>
        </div>
      ))}
    </li>
  );
}
