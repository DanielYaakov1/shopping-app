import icon from '../../assets/images/sonae-west-shopping-ag.svg';
import MainNavigation from '../MainNavigation';
import { HeaderStyle } from './useStyles';
import CartIcon from '../CartIcon';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import {
  addItemToCart,
  deleteItemFromCart,
  IItems,
  setCartModalOpen,
} from '../../store/slices/cartSlice';
import OrderForm from '../../views/Orders/OrderForm/OrderForm';
import Input from '../Input/Input';
import ProductsActions from '../../actions/ProductsActions';
import { setProduct } from '../../store/slices/ProductSlice';
import MyModal from '../MyModal';
import Cart from '../Cart';
import { checkGreaterNumberInArray } from '../../utils/helpers/array.helpers';
import { setCheckoutOpen } from '../../store/slices/orderSlice';
import navLinks from '../../utils/constants/NavLinks';

const Header = memo(() => {
  const dispatch = useDispatch();
  const { getAllProducts, getProductByName } = ProductsActions();
  const { items, isCartModalOpen, totalAmount } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const displayOrderForm = useSelector((state: RootState) => state.orderReducer.isCheckoutOpen);
  const checkIfTheCardIsEmpty = useCallback(() => checkGreaterNumberInArray(items, 0), [items]);
  const handleCartModal = useCallback(
    () => dispatch(setCartModalOpen(!isCartModalOpen)),
    [dispatch, isCartModalOpen]
  );
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  const [searchProduct, setSearchProduct] = useState('');

  const handleSetSearch = useCallback(
    async (searchValue: string) => {
      setSearchProduct(searchValue);
      if (searchValue.length > 0) {
        //search(searchValue);
        const searchResults = await getProductByName(searchValue);
        dispatch(setProduct(searchResults));
      } else {
        const { products } = await getAllProducts();
        dispatch(setProduct(products));
      }
    },
    [dispatch, getAllProducts, getProductByName]
  );

  const handleIncreaseItem = useCallback(
    (item: IItems) => dispatch(addItemToCart({ ...item, amount: 1 })),
    [dispatch]
  );
  const handleDecreaseItem = useCallback(
    (id: string) => dispatch(deleteItemFromCart(id)),
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
              <MainNavigation navLinks={navLinks} />
            </li>
            <li>
              <CartIcon numberCartItem={numberCartItem} onClick={handleCartModal} />
            </li>
          </ul>
        </div>
      </HeaderStyle>
      <MyModal closeBtnName="X" isModalOpen={isCartModalOpen} onClose={handleCartModal}>
        <Cart
          items={items}
          totalAmount={totalAmount}
          checkIfTheCardIsEmpty={checkIfTheCardIsEmpty}
          handleIncreaseItem={handleIncreaseItem}
          handleDecreaseItem={handleDecreaseItem}
          labelButtonCheckout={'CHECK OUT'}
          onClickCheckOutButton={() => {
            dispatch(setCheckoutOpen(true));
          }}
        />
        {displayOrderForm && <OrderForm />}
      </MyModal>
    </div>
  );
});
export default Header;
