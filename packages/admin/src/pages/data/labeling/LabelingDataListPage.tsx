import { dataApiWrapper } from '../../../api/wrapper/data/dataApiWrapper';
import { useFilter } from '../../../hooks/useFilter';
import { useTable } from '../../../hooks/useTable';
import { URLWithParam } from '../../../constants/url';
import { IDataListRequest, IDataListResponse } from '../../../types/data/api';
import { useQuery } from 'react-query';
import { DataListPageTemplate } from '../DataListPageTemplate';
import { labelingDataTableHeads } from '../../../constants/tableHeads';
import { useTableParams } from '../../../hooks/useTableParams';

export const LabelingDataListPage = () => {
  const filterHandler = useFilter();
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.DATA_LABELING);
  const { params } = useTableParams<IDataListRequest>(page, filterHandler.filterState);
  const { data } = useQuery<IDataListResponse>(
    ['labelingData', params],
    () => dataApiWrapper.getDataList({ ...params, isLabeled: false, isValidated: false }),
    { enabled: !!params },
  );

  return (
    <DataListPageTemplate
      title='AI 라벨링 데이터 리스트'
      tableHeads={labelingDataTableHeads}
      data={data}
      filterStateHandler={filterHandler}
      pageHandler={{ page: page, handleChangePage: handleChangePage }}
      handleRowClick={handleRowClick}
    ></DataListPageTemplate>
  );
};
