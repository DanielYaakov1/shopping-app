import { memo } from 'react';
import useStyles from './useStyles';

export type LayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>{children}</div>
    </div>
  );
});

export default Layout;
