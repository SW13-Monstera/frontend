import { dataApiWrapper } from '../../../api/wrapper/data/dataApiWrapper';
import { useFilter } from '../../../hooks/useFilter';
import { useTable } from '../../../hooks/useTable';
import { URLWithParam } from '../../../constants/url';
import { IDataListRequest, IDataListResponse } from '../../../types/data/api';
import { useQuery } from 'react-query';
import { DataListPageTemplate } from '../DataListPageTemplate';
import { doneDataTableHeads } from '../../../constants/tableHeads';
import { useTableParams } from '../../../hooks/useTableParams';

export const DoneDataListPage = () => {
  const filterHandler = useFilter();
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.DATA_DONE);
  const { params } = useTableParams<IDataListRequest>(page, filterHandler.filterState);
  const { data } = useQuery<IDataListResponse>(
    ['doneData', params],
    () => dataApiWrapper.getDataList({ ...params, isLabeled: true, isValidated: true }),
    { enabled: !!params },
  );

  return (
    <DataListPageTemplate
      title='AI 완료 데이터 리스트'
      tableHeads={doneDataTableHeads}
      data={data}
      filterStateHandler={filterHandler}
      pageHandler={{ page: page, handleChangePage: handleChangePage }}
      handleRowClick={handleRowClick}
    />
  );
};
