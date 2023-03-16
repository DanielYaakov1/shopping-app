import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';

export const useStyles = makeStyles(() => ({
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #8a2b06',
    padding: '1rem 0',
    margin: '1rem 0',
    marginInlineEnd: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginInlineEnd: '10px',
    },
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
}));
