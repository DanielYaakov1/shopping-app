import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imgSlider: {
    '& img': {
      height: '300px',
      width: '100%',
      backgroundSize: 'contain',
      objectFit:'none'
    },
  },
}));
