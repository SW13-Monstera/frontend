import { URL, URLWithParam } from '../../../constants/url';
import { useTable } from '../../../hooks/useTable';
import { problemSetTableHeads } from '../../../constants/tableHeads';
import { useQuery } from 'react-query';
import PageTemplate from '../../../templates/PageTemplate';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BaseTable } from '../../../components/Table/BaseTable';
import { problemSetApiWrapper } from '../../../api/wrapper/problem/problemSetApiWrapper';

export const ProblemSetListPage = () => {
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.SHORT_PROBLEM_DETAIL);
  const { data } = useQuery(['problemSetList'], problemSetApiWrapper.getProblemSet);

  return (
    <PageTemplate>
      <Typography>문제 관리</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: 1,
          gap: 1,
        }}
      >
        <Typography>문제 세트</Typography>
        <Link to={URL.PROBLEM_SET_ADD}>
          <Box sx={{ textAlign: 'right' }}>
            <Button variant='contained' sx={{ width: 150 }}>
              문제 세트 추가
            </Button>
          </Box>
        </Link>
      </Box>
      <BaseTable
        tableHeads={problemSetTableHeads}
        data={data}
        page={page}
        handleChangePage={handleChangePage}
        totalElements={data?.length}
        handleRowClick={handleRowClick}
      />
    </PageTemplate>
  );
};
