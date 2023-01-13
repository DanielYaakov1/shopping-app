import { makeStyles } from '@material-ui/core/styles';

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
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    borderRadius: '4px',
  },
  cardTop: {
    backgroundColor: ' #c8cbcbdb',
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
});

export default useStyles;
