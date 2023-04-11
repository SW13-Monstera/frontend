import PageTemplate from '../../templates/PageTemplate';
import { Box, Typography } from '@mui/material';
import { Appbar } from '../../components/FormGroup/Appbar';
import { DATA_FILTER } from '../../constants/filter';
import { BaseTable } from '../../components/Table/BaseTable';
import { IListPageTemplate } from '../../types/etc/template';

export const DataListPageTemplate = ({
  title,
  tableHeads,
  data,
  filterStateHandler,
  pageHandler,
  handleRowClick,
  children,
}: IListPageTemplate) => {
  const { filterState, addFilter, deleteFilter, updateCondition, updateFilterValue } =
    filterStateHandler;
  const { page, handleChangePage } = pageHandler;

  return (
    <PageTemplate>
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
          menuItems={DATA_FILTER}
          conditions={filterState}
          filterCount={filterState.length}
          addFilter={addFilter}
          deleteFilter={deleteFilter}
          updateCondition={updateCondition}
          updateFilterValue={updateFilterValue}
        >
          {children}
        </Appbar>
      </Box>
      <BaseTable
        tableHeads={tableHeads}
        data={data?.userAnswers}
        page={page}
        handleChangePage={handleChangePage}
        totalElements={data?.totalElements}
        handleRowClick={handleRowClick}
      />
    </PageTemplate>
  );
};
