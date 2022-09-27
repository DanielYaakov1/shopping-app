import { useCallback, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Cart from '../Cart/Cart';
import CartIcon from '../CartIcon/CartIcon';

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
//temp component not relevant
const CartModal = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = useCallback(() => setIsModalOpen(!isModalOpen), [isModalOpen]);
  const items = useSelector((state: RootState) => state.cartReducer.items);
  const numberCartItem = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <div>
      <CartIcon onClick={handleModal} numberCartItem={numberCartItem}></CartIcon>
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
    </div>
  );
});
export default CartModal;
