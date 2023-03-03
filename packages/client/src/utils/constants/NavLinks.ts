import { propsArray } from '../../components/MainNavigation/MainNavigation';

const navLinks: propsArray[] = [
  {
    label: 'Home ',
    activeClassName: 'activeLink',
    to: '/',
    exact: true,
  },
  {
    label: 'About',
    activeClassName: 'activeLink',
    to: '/about',
  },
  {
    label: 'Orders',
    activeClassName: 'activeLink',
    to: '/Orders',
  },
];

export default navLinks;
