import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  menuDropDown: {
    display: 'grid',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
    },
  },
});

export default useStyles;
