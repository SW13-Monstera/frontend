import { Box, TextField } from '@mui/material';
import Dropdown from '../Dropdown/Dropdown';
import { DeleteButton } from '../Button/DeleteButton';

interface ISearchForm {
  id: number;
  condition: string;
  content: string;
  menuItems: any[];
  deleteFilter: (event: any) => void;
  updateCondition: (event: any, id: string) => void;
  updateFilterValue: (event: any) => void;
}

export const SearchForm = ({
  id,
  condition,
  content,
  menuItems,
  deleteFilter,
  updateCondition,
  updateFilterValue,
}: ISearchForm) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Dropdown
        title='검색 조건'
        menuItems={menuItems}
        defaultValue={condition}
        updateCondition={updateCondition}
        id={id}
      />
      <TextField
        id={id.toString()}
        variant='outlined'
        type='search'
        defaultValue={content}
        onChange={updateFilterValue}
        InputLabelProps={{ shrink: true }}
      />
      <DeleteButton id={id.toString()} onClick={deleteFilter} />
    </Box>
  );
};
