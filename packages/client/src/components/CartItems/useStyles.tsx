import { makeStyles } from '@material-ui/core/styles';

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
  },
  btnCtn: {
    margin: '1rem 1.5rem',
  },
});
