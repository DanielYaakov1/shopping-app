import { memo } from 'react';
import { useStyles } from './useStyles';

export type dataGridProps = {
  children?: React.ReactNode;
};

const DataGrid = memo(({ children }: dataGridProps) => {
  const classes = useStyles();
  return <div className={classes.grid}>{children}</div>;
});

export default DataGrid;
