import { Typography } from '@mui/material';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import { BaseTable } from '../../components/Table/BaseTable';
import { useTable } from '../../hooks/useTable';
import PageTemplate from '../../templates/PageTemplate';
import { IUserListResponseData } from '../../types/user/api';
import { useQuery } from 'react-query';
import { userTableHeads } from '../../constants/tableHeads';

export const UserPage = () => {
  const { page, handleChangePage } = useTable();
  const { data } = useQuery<IUserListResponseData[]>('users', () => userApiWrapper.userList());

  return (
    <PageTemplate>
      <Typography sx={{ mb: 2 }}>전체 사용자</Typography>
      <BaseTable
        tableHeads={userTableHeads}
        data={data}
        page={page}
        handleChangePage={handleChangePage}
        totalElements={data?.length}
        rowsPerPage={data?.length}
      />
    </PageTemplate>
  );
};
