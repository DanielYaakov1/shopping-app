import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export type dataGridProps = {
  children?: React.ReactNode;
};

export const dataGridStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
}));

const DataGrid = memo(({ children }: dataGridProps) => {
  const classes = dataGridStyles();
  return <div className={classes.grid}>{children}</div>;
});

export default DataGrid;
