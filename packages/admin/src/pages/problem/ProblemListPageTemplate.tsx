import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appbar } from '../../components/FormGroup/Appbar';
import PageTemplate from '../../templates/PageTemplate';
import { PROBLEM_FILTER } from '../../constants/filter';
import { BaseTable } from '../../components/Table/BaseTable';
import { IListPageTemplate } from '../../types/etc/template';
import { URL } from '../../constants/url';

export const ProblemListPageTemplate = ({
  title,
  tableHeads,
  addUrl,
  data,
  filterStateHandler,
  pageHandler,
  handleRowClick,
}: IListPageTemplate) => {
  const { filterState, addFilter, deleteFilter, updateCondition, updateFilterValue } =
    filterStateHandler;
  const { page, handleChangePage } = pageHandler;

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
        <Typography>{title}</Typography>
        <Appbar
          menuItems={PROBLEM_FILTER}
          conditions={filterState}
          filterCount={filterState.length}
          addFilter={addFilter}
          deleteFilter={deleteFilter}
          updateCondition={updateCondition}
          updateFilterValue={updateFilterValue}
        >
          <Link to={addUrl ?? URL.LONG_PROBLEM_LIST}>
            <Button variant='contained' sx={{ height: '100%' }}>
              문제 추가
            </Button>
          </Link>
        </Appbar>
      </Box>
      <BaseTable
        tableHeads={tableHeads}
        data={data?.problems}
        page={page}
        handleChangePage={handleChangePage}
        totalElements={data?.totalElements}
        handleRowClick={handleRowClick}
      />
    </PageTemplate>
  );
};
