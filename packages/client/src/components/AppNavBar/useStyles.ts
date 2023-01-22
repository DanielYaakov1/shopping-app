import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const headerLogo = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',

  // [theme.breakpoints.down('sm')]: {
  //   mr: 2,
  //   display: { xs: 'flex', md: 'none' },
  //   flexGrow: 1,
  //   fontFamily: 'monospace',
  //   fontWeight: 700,
  //   letterSpacing: '.3rem',
  //   color: 'inherit',
  //   textDecoration: 'none',
  // }
};

export const appIcon = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

export const searchHeaderField = {
  '& > :not(style)': { m: 1, width: '25ch' },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& > :not(style)': { width: '10ch', display: 'flex' },
  },
};

const useStyles = makeStyles({
  menuDropDown: {
    display: 'grid',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
    }
  },
});

export default useStyles;
