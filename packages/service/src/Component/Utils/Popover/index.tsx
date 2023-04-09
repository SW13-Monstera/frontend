import { Popover } from '@mui/material';

interface ICustomPopover {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: (event: HTMLButtonElement) => void;
  children: React.ReactNode;
}

export default function CustomPopover({
  id,
  open,
  anchorEl,
  handleClose,
  children,
}: ICustomPopover) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
}
