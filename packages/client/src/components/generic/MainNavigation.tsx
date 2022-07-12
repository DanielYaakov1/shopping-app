import { Link, NavLink } from 'react-router-dom';

export type MainNavigationProps = {
     label: string;
     to: string;
     exact?: boolean;
     isActive?: boolean;
     activeClassName?: any;
};

const MainNavigation = ({ label, to, activeClassName }: MainNavigationProps) => {
     return (
          <NavLink to={to} activeClassName={activeClassName}>
               {label}
          </NavLink>
     );
};
export default MainNavigation;
