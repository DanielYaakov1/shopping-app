import icon from '../../assets/images/sonae-west-shopping-ag.svg';
import MainNavigation from './MainNavigation';
import { HeaderStyle } from '../../assets/style/generic/Header';
import CartIcon from './CartIcon';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { memo } from 'react';

const Header = memo(() => {
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <HeaderStyle className="header">
      <div className="header__logo">
        <img src={icon} alt="logo" />
      </div>
      <CartIcon numberCartItem={numberCartItem}></CartIcon>
      <div className="header__nav">
        <ul>
          <li>
            <MainNavigation label={'Home'} activeClassName={'activeLink'} to={'/'} exact={true}></MainNavigation>
          </li>
          <li>
            <MainNavigation activeClassName={'activeLink'} label={'About'} to={'/about'}></MainNavigation>
          </li>
          <li>
            <MainNavigation activeClassName={'activeLink'} label={'Contact'} to={'/contact'}></MainNavigation>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
});
export default Header;
