import { memo } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styleModal } from './useStyles';

export type props = {
  isModalOpen: boolean;
  onClose?: (() => void) | undefined;
  children: React.ReactNode;
  closeBtnName: string;
};

const MyModal = memo(({ isModalOpen, onClose, children, closeBtnName }: props) => {
  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      draggable={true}>
      <Box sx={styleModal}>
        <button onClick={onClose}>{closeBtnName}</button>
        {children}
      </Box>
    </Modal>
  );
});
export default MyModal;
