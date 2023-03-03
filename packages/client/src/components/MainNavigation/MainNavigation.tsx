import { memo } from 'react';
import { NavLink } from 'react-router-dom';

export type MainNavigationProps = {
  navLinks: any;
};
export type propsArray = {
  to: string;
  activeClassName: string;
  exact?: boolean;
  label: string;
};

const MainNavigation = memo(({ navLinks }: MainNavigationProps) => {
  return navLinks.map((element: propsArray, index: number) => {
    return (
      <NavLink
        key={index}
        style={{
          padding: 5,
        }}
        to={element.to}
        activeClassName={element.activeClassName}
        exact={element.exact}>
        {element.label}
      </NavLink>
    );
  });
});
export default MainNavigation;
