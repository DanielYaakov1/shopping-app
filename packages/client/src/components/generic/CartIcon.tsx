import { memo, MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Cart from './Cart';

export type props = {
  numberCartItem: number;
  sizeIcon?: string;
  badgeColor?: string;
  onClick?: MouseEventHandler | undefined;
  isModalOpen?: any;
  handleModal?: () => void;
};
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartIcon = memo(({ numberCartItem, onClick, isModalOpen, handleModal }: props) => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={onClick}>
      <Badge badgeContent={numberCartItem} color="success">
        <ShoppingBagOutlinedIcon />
        <Modal
          open={isModalOpen}
          onClose={handleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Cart />
          </Box>
        </Modal>
      </Badge>
    </IconButton>
  );
});
export default CartIcon;
