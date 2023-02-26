import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  cartItem: {},
  gridList: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '75%',
    height: '60%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
  title: {},
  description: {
    fontStyle: 'italic',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '100%',
    '&:hover': {
      wordWrap: 'break-word',
      overflow: 'visible',
      whiteSpace: 'normal',
    },
  },
  price: {},
  card: {
    maxWidth: '30%',
    margin: '1%',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  card1: {
    maxWidth: '30%',
    margin: '1%',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    textAlign: 'center',
    marginBottom: '1rem',
  },
}));

export default useStyles;
