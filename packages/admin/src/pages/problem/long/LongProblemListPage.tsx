import { URL, URLWithParam } from '../../../constants/url';
import { longProblemApiWrapper } from '../../../api/wrapper/problem/longProblemApiWrapper';
import { useFilter } from '../../../hooks/useFilter';
import { useTable } from '../../../hooks/useTable';
import { useQuery } from 'react-query';
import { IProblemListData, IProblemListRequest } from '../../../types/problem/api';
import { ProblemListPageTemplate } from '../ProblemListPageTemplate';
import { longProblemTableHeads } from '../../../constants/tableHeads';
import { useTableParams } from '../../../hooks/useTableParams';

export const LongProblemListPage = () => {
  const filterHandler = useFilter();
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.LONG_PROBLEM_DETAIL);
  const { params } = useTableParams<IProblemListRequest>(page, filterHandler.filterState);
  const { data } = useQuery<IProblemListData>(
    ['longProblemList', params],
    () => longProblemApiWrapper.getLongProblemList(params),
    { enabled: !!params },
  );

  return (
    <ProblemListPageTemplate
      title='서술형 문제'
      tableHeads={longProblemTableHeads}
      addUrl={URL.LONG_PROBLEM_ADD}
      data={data}
      filterStateHandler={filterHandler}
      pageHandler={{ page: page, handleChangePage: handleChangePage }}
      handleRowClick={handleRowClick}
    />
  );
};
