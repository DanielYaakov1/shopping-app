import { memo } from 'react';
import { dataGridStyles } from '../../assets/style/components/dataGridStyles';

export type dataGridProps = {
  children?: React.ReactNode;
};

const DataGrid = memo(({ children }: dataGridProps) => {
  const classes = dataGridStyles();
  return <div className={classes.grid}>{children}</div>;
});

export default DataGrid;
