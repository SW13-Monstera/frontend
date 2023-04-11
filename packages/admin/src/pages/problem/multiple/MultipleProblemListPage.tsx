import { URL, URLWithParam } from '../../../constants/url';
import { useFilter } from '../../../hooks/useFilter';
import { multipleProblemApiWrapper } from '../../../api/wrapper/problem/multipleProblemApiWrapper';
import { useTable } from '../../../hooks/useTable';
import { useQuery } from 'react-query';
import { IProblemListData, IProblemListRequest } from '../../../types/problem/api';
import { ProblemListPageTemplate } from '../ProblemListPageTemplate';
import { multipleTableHeads } from '../../../constants/tableHeads';
import { useTableParams } from '../../../hooks/useTableParams';

export const MultipleProblemListPage = () => {
  const filterHandler = useFilter();
  const { page, handleChangePage, handleRowClick } = useTable(URLWithParam.MULTIPLE_PROBLEM_DETAIL);
  const { params } = useTableParams<IProblemListRequest>(page, filterHandler.filterState);
  const { data } = useQuery<IProblemListData>(
    ['multipleProblemList', params],
    () => multipleProblemApiWrapper.getMultipleProblemList(params),
    { enabled: !!params },
  );

  return (
    <ProblemListPageTemplate
      title='객관식 문제'
      tableHeads={multipleTableHeads}
      addUrl={URL.MULTIPLE_PROBLEM_ADD}
      data={data}
      filterStateHandler={filterHandler}
      pageHandler={{ page: page, handleChangePage: handleChangePage }}
      handleRowClick={handleRowClick}
    />
  );
};
