import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {},
  shipTo: {
    color: '#007185',
    display: 'flex',
    '&:hover': {},
  },
  shipToContainer: {
    position: 'relative',
  },

  shipToContext: {
    position: 'absolute',
    top: '100%',
    left: '67%',
    transform: 'translateX(-40%)',
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    maxWidth: 500,
    marginTop: 2,
  },
});

export default useStyles;
