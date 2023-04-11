import { Popover, Box } from '@mui/material';
import { SearchForm } from '../FormGroup/SearchForm';
import { AddButton } from '../Button/AddButton';
import { IFilter } from '../../types/etc';
import { MouseEvent } from 'react';

interface IFilterPopover {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  menuItems: any[];
  conditions: IFilter[];
  addFilter: () => void;
  deleteFilter: (event: MouseEvent<Element, MouseEvent>) => void;
  updateCondition: (event: any, id: string) => void;
  updateFilterValue: (event: any) => void;
}

export const FilterPopover = ({
  anchorEl,
  handleClose,
  menuItems,
  conditions,
  addFilter,
  deleteFilter,
  updateCondition,
  updateFilterValue,
}: IFilterPopover) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      sx={{ mt: 1 }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, m: 5 }}>
        {conditions.map((e: IFilter) => (
          <SearchForm
            id={e.id}
            condition={e.condition}
            content={e.value}
            menuItems={menuItems}
            key={e.id}
            deleteFilter={deleteFilter}
            updateCondition={updateCondition}
            updateFilterValue={updateFilterValue}
          />
        ))}
        <AddButton onClick={addFilter} />
      </Box>
    </Popover>
  );
};
