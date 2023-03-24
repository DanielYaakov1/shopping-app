import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type AlertDialogProps = {
  handleClickOpen: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
  handleCancelAction: () => void;
  handleApprovedAction: () => void;
  titleDialog: string;
  bodyDialog: string;
};

const AlertDialog = ({
  handleClickOpen,
  handleApprovedAction,
  open,
  handleCancelAction,
  titleDialog,
  bodyDialog,
}: AlertDialogProps) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancelAction}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{titleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{bodyDialog}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAction}>Disagree</Button>
          <Button onClick={handleApprovedAction} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
