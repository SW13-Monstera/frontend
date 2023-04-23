import { Typography, Button, Box } from '@mui/material';
import { DeleteButton } from '../Button/DeleteButton';
import { MarkdownInputCard } from '../Card/MarkdownInputCard';

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
              <MarkdownInputCard id={id} defaultValue={defaultValue[idx]} className={className} />
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
