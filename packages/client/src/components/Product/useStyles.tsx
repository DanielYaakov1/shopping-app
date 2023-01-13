import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
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
  title: {
    color: theme.palette.primary.light,
  },
  description: {
    color: theme.palette.primary.light,
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
  price: {
    color: theme.palette.primary.light,
  },
  card: {
    maxWidth: '30%',
    margin: '1%',
    border: '1px solid #ccc',
    boxShadow: '0 0 5px #ccc',
    textAlign: 'center',
    marginBottom: '1rem',
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
