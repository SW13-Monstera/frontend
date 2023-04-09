import { ChangeEvent } from 'react';
import { TableCell, TableHead, TableRow, Checkbox } from '@mui/material';
import { ITableHead } from '../../types/etc';

interface CustomTableProps {
  numSelected?: number;
  rowCount: number;
  tableHeads: ITableHead[];
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CustomTableHead(props: CustomTableProps) {
  const { onSelectAllClick, numSelected, rowCount, tableHeads } = props;

  return (
    <TableHead>
      <TableRow>
        {tableHeads.map((tableHead) => (
          <TableCell key={tableHead.id} align='center'>
            {tableHead.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
