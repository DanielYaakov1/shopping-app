import { memo } from 'react';
import { LayoutStyle } from '../../assets/style/components/Layout';

export type LayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  return <LayoutStyle>{children}</LayoutStyle>;
});

export default Layout;
