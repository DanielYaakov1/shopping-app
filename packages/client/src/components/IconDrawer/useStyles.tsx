import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));
