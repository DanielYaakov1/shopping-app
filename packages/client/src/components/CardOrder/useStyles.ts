import { width } from '@mui/system';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {},
  shipTo: {
    //fontFamily: 'cursive',
    color: '#007185',
    '&:hover': {
      width: '100%',
    },
  },
});

export default useStyles;
