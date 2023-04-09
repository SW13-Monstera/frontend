import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IMenuItem {
  value: string;
  name: string;
}

interface IDropdown {
  title: string;
  menuItems: IMenuItem[];
  defaultValue?: string;
  id: number;
  updateCondition: (event: any, id: string) => void;
}

export default function Dropdown({
  title,
  menuItems,
  defaultValue,
  id,
  updateCondition,
}: IDropdown) {
  const [selectedItem, setselectedItem] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setselectedItem(event.target.value);
  };

  useEffect(() => {
    updateCondition(selectedItem, id.toString());
  }, [selectedItem]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={id.toString()}>{title}</InputLabel>
        <Select
          labelId={id.toString()}
          id={id.toString()}
          value={selectedItem}
          label='search-criteria'
          onChange={handleChange}
          defaultValue='id'
        >
          {menuItems.map((menuItem) => (
            <MenuItem value={menuItem.value} key={menuItem.value}>
              <option value={menuItem.value}>{menuItem.name}</option>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
