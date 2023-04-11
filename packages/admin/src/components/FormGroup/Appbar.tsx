import { Button, Box, Badge } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { usePopover } from '../../hooks/usePopover';
import { FilterPopover } from '../Modal/FilterPopover';
import { IFilter } from '../../types/etc';
import { MouseEvent } from 'react';

interface IAppbar {
  children?: JSX.Element;
  menuItems: any[];
  conditions: IFilter[];
  filterCount: number;
  addFilter: () => void;
  deleteFilter: (event: MouseEvent<Element, MouseEvent>) => void;
  updateCondition: (event: any, id: string) => void;
  updateFilterValue: (event: any) => void;
}

export const Appbar = ({
  children,
  menuItems,
  conditions,
  filterCount,
  addFilter,
  deleteFilter,
  updateCondition,
  updateFilterValue,
}: IAppbar) => {
  const { anchorEl, handleClick, handleClose } = usePopover();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: 1,
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        <Badge badgeContent={0} color='primary'>
          <Button variant='outlined' startIcon={<FilterAltIcon />} onClick={handleClick}>
            필터
          </Button>
          <Badge badgeContent={filterCount} color='primary'>
            <FilterPopover
              anchorEl={anchorEl}
              handleClose={handleClose}
              menuItems={menuItems}
              conditions={conditions}
              addFilter={addFilter}
              deleteFilter={deleteFilter}
              updateCondition={updateCondition}
              updateFilterValue={updateFilterValue}
            ></FilterPopover>
          </Badge>
        </Badge>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
          gap: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
