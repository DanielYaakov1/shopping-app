import { createTheme, colors } from '@material-ui/core';

import { shadows } from './shadows';

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFCFF',
      paper: colors.common.white,
    },
    primary: {
      main: '#2461FB',
      light: '#C9D8FF',
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.common.black,
      secondary: '#9D9D9D',
    },
  },
  shadows,

  typography: {
    fontFamily: 'Montserrat-Regular',
    button: {
      fontFamily: 'Montserrat-Bold',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
    },
    h1: {
      fontSize: 41,
      fontFamily: 'Montserrat-Bold',
    },
    h2: {
      fontSize: 41,
      fontFamily: 'Montserrat-Regular',
    },
    h3: {
      fontSize: 25,
      fontFamily: 'Montserrat-Bold',
    },
    h4: {
      fontSize: 25,
      fontFamily: 'Montserrat-Regular',
      lineHeight: '26.64px',
    },
    h5: {
      fontSize: 18,
      fontFamily: 'Montserrat-Bold',
    },
    h6: {
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
    },
  },
});

export default theme;
