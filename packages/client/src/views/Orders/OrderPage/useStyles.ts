import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme';

const useStyles = makeStyles({
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #8a2b06',
    padding: '1rem 0',
    margin: '1rem 0',
  },
  card: {
    maxWidth: '80%',
    margin: '1% 8%',
    //border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    borderRadius: '8px 8px 0 0',
    border: '1px #D5D9D9 solid',
  },
  cardTop: {
    backgroundColor: ' #F0F2F2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
  },
  cardContent: {
    maxWidth: '30%',
    margin: '1%',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  cardFooter: {
    padding: '0.5rem',
    borderTop: '2px solid  #c8cbcbdb',
  },
  cardImage: {
    height: '75px',
    width: '75px',
    display: 'flex',
  },
  cardName: {
    margin: '45px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 10,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },
});

export default useStyles;
