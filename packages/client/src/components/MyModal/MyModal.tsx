import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { style } from '../CartIcon/CartIcon';

export function MyModal(props: {
  isModalOpen: boolean;
  handleModal?: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined;
  children?: React.ReactNode;
}) {
  return (
    <Modal
      open={props.isModalOpen}
      onClose={props.handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
}
