import { makeStyles } from '@mui/styles';
import theme from '../../../components/theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      '& .MuiStepper-root': {
        display: 'block',
      },
    },
  },
  completed: {
    color: 'green',
  },
});

export default useStyles;
