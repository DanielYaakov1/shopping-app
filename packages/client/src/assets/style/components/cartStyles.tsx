import { createStyles, makeStyles } from '@material-ui/core/styles';

export const cartStyles = makeStyles(() =>
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
