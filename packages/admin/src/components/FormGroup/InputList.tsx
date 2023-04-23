import { Typography, Button, Box, TextField } from '@mui/material';
import { DeleteButton } from '../Button/DeleteButton';

interface IList {
  title: string;
  ids: string[];
  addItem: () => void;
  deleteItem: (id: string) => void;
  defaultValue?: string[] | undefined;
  className: string;
}

const InputList = ({ title, ids, addItem, deleteItem, defaultValue, className }: IList) => {
  return (
    <>
      {defaultValue && (
        <>
          <Typography>{title}</Typography>
          {ids.map((id, idx) => (
            <Box sx={{ display: 'flex', gap: 1, width: '100%' }} key={id}>
              <TextField
                variant='outlined'
                sx={{ my: 1, mr: 1, width: '90%' }}
                InputLabelProps={{ shrink: true }}
                inputProps={{ className }}
                defaultValue={defaultValue[idx]}
              />
              <DeleteButton onClick={() => deleteItem(id)} />
            </Box>
          ))}
          <Button variant='contained' sx={{ mt: 2 }} onClick={addItem}>
            추가
          </Button>
        </>
      )}
    </>
  );
};
export default InputList;
