import icon from '../../assets/images/sonae-west-shopping-ag.svg';
import MainNavigation from '../MainNavigation/MainNavigation';
import { HeaderStyle } from '../../assets/style/components/Header';
import CartIcon from '../CartIcon/CartIcon';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { setCartModalOpen } from '../../store/slices/cartSlice';
import OrderForm from '../OrderForm/OrderForm';
import Input from '../Input/Input';
import { getAllProductsAction, getProductByName } from '../../actions/ProductsAction';
import { setProduct } from '../../store/slices/ProductSlice';

const Header = memo(() => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const isCartModalOpen = useSelector((state: RootState) => state.cartReducer.isCartModalOpen);
  const displayOrder = useSelector((state: RootState) => state.orderReducer.isPurchaseModal);
  const handleCartModal = useCallback(
    () => dispatch(setCartModalOpen(!isCartModalOpen)),
    [dispatch, isCartModalOpen]
  );
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  //const products = useSelector((state: RootState) => state.productReducer.products);
  const [searchProduct, setSearchProduct] = useState('');

  const handleSetSearch = useCallback(
    async (searchValue: string) => {
      setSearchProduct(searchValue);
      if (searchValue.length > 0) {
        //search(searchValue);
        const searchResults = await getProductByName(searchValue);
        dispatch(setProduct(searchResults));
      } else {
        const { products } = await getAllProductsAction();
        dispatch(setProduct(products));
      }
    },
    [dispatch]
  );

  return (
    <div>
      <HeaderStyle className="header">
        <div className="header__logo">
          <img src={icon} alt="logo" />
        </div>
        <Input
          placeholder="search"
          type="text"
          searchProduct={searchProduct}
          setSearchProduct={handleSetSearch}
        />
        <div className="header__nav">
          <ul>
            <li>
              <MainNavigation label={'Home'} activeClassName={'activeLink'} to={'/'} exact={true} />
            </li>
            <li>
              <MainNavigation activeClassName={'activeLink'} label={'About'} to={'/about'} />
            </li>
            <li>
              <MainNavigation activeClassName={'activeLink'} label={'Contact'} to={'/contact'} />
            </li>
            <li>
              <CartIcon
                numberCartItem={numberCartItem}
                onClick={handleCartModal}
                isModalOpen={isCartModalOpen}
              />
            </li>
          </ul>
        </div>
      </HeaderStyle>
      {displayOrder && <OrderForm />}
    </div>
  );
});
export default Header;
