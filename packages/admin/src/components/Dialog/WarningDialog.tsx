import { forwardRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  Button,
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';
import { URL } from '../../constants/url';
import { Link } from 'react-router-dom';

interface IWarningDialog {
  isOpen: boolean;
  handleClose: () => void;
  onClick: () => void;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const WarningDialog = ({ isOpen, handleClose, onClick }: IWarningDialog) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>❗주의❗</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            수정하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={URL.LONG_PROBLEM_LIST}>
            <Button
              onClick={() => {
                handleClose();
                onClick();
              }}
            >
              확인
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};
