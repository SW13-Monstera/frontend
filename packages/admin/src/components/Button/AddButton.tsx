import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IAddButton {
  onClick: () => void;
}

export const AddButton = ({ onClick }: IAddButton) => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon />}
      sx={{ width: 90, height: 30 }}
      onClick={onClick}
    >
      추가
    </Button>
  );
};
