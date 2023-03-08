import * as React from 'react';
import MyModal from '../MyModal';
import CartItems from '../CartItems';
import { IItems } from '../../store/slices/cartSlice';
import Checkout from '../Checkout/Checkout';

interface ICart {
  isCartModalOpen: boolean;
  handleCartModal: (() => void) | undefined;
  displayOrderForm: boolean;
  items: IItems[];
  totalAmount: number;
  handleIncreaseItem: any;
  handleDecreaseItem: any;
  handleCheckoutForm: () => void;
}

const Cart = React.memo(
  ({
    isCartModalOpen,
    handleCartModal,
    displayOrderForm,
    items,
    totalAmount,
    handleIncreaseItem,
    handleDecreaseItem,
    handleCheckoutForm,
  }: ICart) => {
    return (
      <MyModal closeBtnName="X" isModalOpen={isCartModalOpen} onClose={handleCartModal}>
        {!displayOrderForm && (
          <CartItems
            items={items}
            totalAmount={totalAmount}
            handleIncreaseItem={handleIncreaseItem}
            handleDecreaseItem={handleDecreaseItem}
            labelButtonCheckout={'CHECK OUT'}
            onClickCheckOutButton={handleCheckoutForm}
          />
        )}
        {displayOrderForm && <Checkout />}
      </MyModal>
    );
  }
);
export default Cart;
