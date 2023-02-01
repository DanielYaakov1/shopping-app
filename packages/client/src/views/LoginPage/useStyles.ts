import { makeStyles } from '@mui/styles';
import theme from '../../components/theme';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    textAlign: 'center',
  },
  googleButton: {
    borderRadius: '34px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    margin: '5px',
    '& div': {
      borderRadius: '30px !important',
    },
  },
}));
export default useStyles;
