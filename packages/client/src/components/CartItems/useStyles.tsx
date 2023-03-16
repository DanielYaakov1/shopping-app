import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';

export const useStyles = makeStyles({
  totalAmount: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'space-between',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: '1.5rem 2rem',
    color: '#4e4c4b',
    padding: '0.5rem',
  },
  cartItems: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'scroll',
  },
  cartItemList: {
    listStyleType: 'none',
    color: '#4e4c4b',
    [theme.breakpoints.down('sm')]: {
      margin: 5,
      padding: 5,
    },
  },
  btnCtn: {
    margin: '1rem 1.5rem',
  },
});
