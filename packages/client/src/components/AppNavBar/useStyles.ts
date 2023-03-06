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
  margin: '10px 10px',
  '& > :not(style)': { width: '25ch', height: '25%' },
  '& label.Mui-focused': {
    color: 'white',
    font: 'revert',
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
    '&.MuiInputBase-input': {
      font: 'revert',
      letterSpacing: 'inherit',
      color: 'currentColor',
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '10px',
      margin: 0,
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      minWidth: 0,
      width: '100%',
      WebkitAnimationName: 'mui-auto-fill-cancel',
      animationName: 'mui-auto-fill-cancel',
      WebkitAnimationDuration: '500ms',
      animationDuration: '500ms',
      padding: '10.5px 14',
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
    },
  },
  headerNav: {
    '& .MuiContainer-root': {
      maxWidth: '100%',
    },
  },
});

export default useStyles;
