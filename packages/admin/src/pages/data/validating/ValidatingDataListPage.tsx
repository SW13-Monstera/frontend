import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { dataApiWrapper } from '../../../api/wrapper/data/dataApiWrapper';
import { useFilter } from '../../../hooks/useFilter';
import { useTable } from '../../../hooks/useTable';
import { URL, URLWithParam } from '../../../constants/url';
import { useQuery } from 'react-query';
import { IDataListRequest, IDataListResponse } from '../../../types/data/api';
import { DataListPageTemplate } from '../DataListPageTemplate';
import { validatingDataTableHeads } from '../../../constants/tableHeads';
import { useTableParams } from '../../../hooks/useTableParams';

export const ValidatingDataListPage = () => {
  const filterHandler = useFilter();
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.DATA_VALIDATING);
  const { params } = useTableParams<IDataListRequest>(page, filterHandler.filterState);
  const { data } = useQuery<IDataListResponse>(
    ['validatingData', params],
    () => dataApiWrapper.getDataList({ ...params, isLabeled: true, isValidated: false }),
    { enabled: !!params },
  );

  return (
    <DataListPageTemplate
      title='AI 검수 데이터 리스트'
      tableHeads={validatingDataTableHeads}
      data={data}
      filterStateHandler={filterHandler}
      pageHandler={{ page: page, handleChangePage: handleChangePage }}
      handleRowClick={handleRowClick}
    ></DataListPageTemplate>
  );
};
