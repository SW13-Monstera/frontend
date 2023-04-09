import { MouseEvent } from 'react';
import { ITableHead } from '../../types/etc';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  Checkbox,
} from '@mui/material';
import { CustomTableToolbar } from './CustomToolbar';
import { CustomTableHead } from './CustomTableHead';
import { CustomTableCell } from './CustomTableCell';

interface IBaseTable {
  tableHeads: ITableHead[];
  data: any[] | undefined;
  page: number;
  handleChangePage: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    newPage: number,
  ) => void;
  totalElements: number | undefined;
  handleRowClick?: (id: string) => void;
  rowsPerPage?: number;
}

const ROWS_PER_PAGE = 10;

export const BaseTable = ({
  tableHeads,
  data,
  page,
  handleChangePage,
  totalElements,
  handleRowClick,
  rowsPerPage = ROWS_PER_PAGE,
}: IBaseTable) => {
  const emptyRows = page > 0 ? Math.max(0, rowsPerPage - (data?.length ?? 0)) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Typography>총 개수 {totalElements}개</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size='small'>
          <CustomTableHead
            onSelectAllClick={() => {}}
            rowCount={data?.length ?? 0}
            tableHeads={tableHeads}
          />
          <TableBody>
            {data?.map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {Object.keys(row).map((key) => (
                    <CustomTableCell
                      key={`${key}-${row.id}`}
                      tableHeads={tableHeads}
                      row={row}
                      keyName={key}
                      isMain={key === 'title' || key === 'problemTitle'}
                      handleRowClick={handleRowClick}
                    />
                  ))}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 33 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={totalElements ?? 0}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={!totalElements || (totalElements && totalElements <= 0) ? 0 : page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};
