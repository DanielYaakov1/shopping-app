import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const iconDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  })
);
