import { makeStyles } from '@material-ui/core/styles';

export const gridStyles = makeStyles((theme) => ({
  img: {
    maxHeight: '380px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    objectFit: 'none',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
}));
