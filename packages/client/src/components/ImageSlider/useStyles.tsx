import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imgSlider: {
    '& img': {
      height: 500,
      width: '100%',
      backgroundSize: 'contain',
    },
  },
}));
