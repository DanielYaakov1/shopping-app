import icon from '../../assets/images/sonae-west-shopping-ag.svg';
import MainNavigation from './MainNavigation';
import { HeaderStyle } from '../../assets/style/generic/Header';
import CartIcon from './CartIcon';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { setCartModalOpen } from '../../store/slices/cartSlice';
import MyOrderModal from './MyOrder';

const Header = memo(() => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const isCartModalOpen = useSelector((state: RootState) => state.cartReducer.isCartModalOpen);
  const displayOrder = useSelector((state: RootState) => state.orderReducer.isPurchaseModal);
  const handleCartModal = useCallback(() => dispatch(setCartModalOpen(!isCartModalOpen)), [dispatch, isCartModalOpen]);
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <div>
      {' '}
      <HeaderStyle className="header">
        <div className="header__logo">
          <img src={icon} alt="logo" />
        </div>
        <CartIcon numberCartItem={numberCartItem} onClick={handleCartModal} isModalOpen={isCartModalOpen}></CartIcon>
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
      {displayOrder && <MyOrderModal />}
    </div>
  );
});
export default Header;
