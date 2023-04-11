import { Checkbox, TableCell } from '@mui/material';
import { ITableHead } from '../../types/etc';
import { roundToSecondDigit } from '../../utils';

interface ICustomTableCell {
  tableHeads: ITableHead[];
  row: any;
  keyName: string;
  isMain?: boolean;
  handleRowClick?: (id: string) => void;
}

export const CustomTableCell = ({
  tableHeads,
  row,
  keyName,
  isMain,
  handleRowClick,
}: ICustomTableCell) => {
  return (
    <>
      {tableHeads.map((th) => th.id).includes(keyName) ? (
        isMain ? (
          <TableCell
            align='center'
            sx={{
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={
              handleRowClick
                ? () => {
                    handleRowClick(row.id);
                  }
                : () => {
                    return;
                  }
            }
          >
            {row[keyName] ?? 'N/A'}
          </TableCell>
        ) : (
          <TableCell align='center'>
            {typeof row[keyName] === 'boolean' ? (
              <Checkbox disabled checked={row[keyName].toString() === 'true' ? true : false} />
            ) : typeof row[keyName] === 'number' ? (
              roundToSecondDigit(row[keyName]) ?? 'N/A'
            ) : (
              row[keyName] ?? 'N/A'
            )}
          </TableCell>
        )
      ) : (
        ''
      )}
    </>
  );
};
