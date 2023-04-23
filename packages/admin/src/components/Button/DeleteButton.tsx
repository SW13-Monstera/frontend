import { MouseEvent } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface IDeleteButton {
  id?: string;
  onClick: (event: MouseEvent) => void;
}

export const DeleteButton = ({ id, onClick }: IDeleteButton) => {
  return (
    <IconButton aria-label='delete' id={id} onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};
