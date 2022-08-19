import { Link, NavLink } from 'react-router-dom';

export type MainNavigationProps = {
     label: string;
     to: string;
     exact?: boolean;
     isActive?: boolean;
     activeClassName?: string;
     activeStyle?: string;
};

const MainNavigation = ({ label, to, activeClassName, exact }: MainNavigationProps) => {
     return (
          <NavLink to={to} activeClassName={activeClassName} exact={exact}>
               {label}
          </NavLink>
     );
};
export default MainNavigation;
