import { memo, MouseEventHandler, ReactChild, ReactFragment, ReactPortal } from 'react';
import IconButton from '@mui/material/IconButton';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import Cart from '../Cart/Cart';
import { MyModal } from '../MyModal/MyModal';

export type props = {
  numberCartItem: number;
  sizeIcon?: string;
  badgeColor?: string;
  onClick?: MouseEventHandler | undefined;
  isModalOpen?: any;
  handleModal?: () => void;
};

const CartIcon = memo(({ numberCartItem, onClick, isModalOpen, handleModal }: props) => {
  return (
    <IconButton size="small" aria-label="show 4 new mails" color="inherit" onClick={onClick}>
      <Badge badgeContent={numberCartItem} color="success">
        <ShoppingBagOutlinedIcon />
        <MyModal isModalOpen={isModalOpen} handleModal={handleModal}>
          <Cart />
        </MyModal>
      </Badge>
    </IconButton>
  );
});
export default CartIcon;
