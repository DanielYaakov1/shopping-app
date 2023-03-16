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
    height: 'auto',
  },
  image: {
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    '&.img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  title: {},
  description: {
    whiteSpace: 'nowrap',
    width: '90%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: '10px',
    justifyContent: 'space-evenly',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  price: {},
  card: {
    width: '30%',
    margin: '1%',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
