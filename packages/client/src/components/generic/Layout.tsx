import { LayoutStyle } from '../../assets/style/generic/Layout';

export type LayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
