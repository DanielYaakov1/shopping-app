import { memo } from 'react';
import Dialog from '@mui/material/Dialog';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export type props = {
  isModalOpen: boolean;
  onClose?: (() => void) | undefined;
  children: React.ReactNode;
  closeBtnName: string;
};
const theme = createTheme();

const MyModal = memo(({ isModalOpen, onClose, children, closeBtnName }: props) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isModalOpen} fullWidth={true}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
        {children}
      </Dialog>
    </ThemeProvider>
  );
});
export default MyModal;
