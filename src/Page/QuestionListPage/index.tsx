import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { useCheckedTagStore } from '../../hooks/useStore';
import {
  listPageWrapperStyle,
  listPageMainWrapperStyle,
  asideStyle,
  questionListStyle,
  questionListWrapperStyle,
} from './style.css';
import { PageTemplate } from '../../Template';
import { useEffect, useState, MouseEvent } from 'react';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import {
  IProblemListResponseData,
  IProblemListResponseDataContents,
  IProblemRequestParam,
} from '../../types/api/problem';
import { getFilterParams } from '../../utils/getFilterParams';
import { Pagination } from '../../Component/Pagination';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { ProblemFilter } from './components/ProblemFilter';

export const getPage = parseInt(
  new URL(window.location.toString()).searchParams.get('page') ?? '0',
);

function QuestionListPage() {
  const { checkedTags } = useCheckedTagStore();
  const [params, setParams] = useState<IProblemRequestParam>({
    ...getFilterParams(checkedTags),
    page: parseInt(new URL(window.location.toString()).searchParams.get('page') ?? '0'),
  });
  const { data } = useQuery<IProblemListResponseData>(
    ['problemList', params],
    () => problemApiWrapper.problemList({ ...params, size: 12 }),
    { enabled: !!params },
  );

  const movePrevPage = () => {
    if (params?.page && params?.page > 0) {
      setParams({ ...params, page: params?.page - 1 });
    }
  };

  const moveNextPage = () => {
    if (
      params?.page !== undefined &&
      params?.page !== null &&
      data?.totalPages !== undefined &&
      data?.totalPages !== null &&
      params?.page < data?.totalPages - 1
    ) {
      setParams({ ...params, page: params?.page + 1 });
    }
  };

  const changePage = (event: MouseEvent<HTMLButtonElement>) => {
    setParams({ ...params, page: parseInt((event.target as HTMLButtonElement).innerText) - 1 });
  };

  const handleSearchInput = () => {
    const query = (document.getElementById('search-problem') as HTMLInputElement).value;
    setParams({ ...getFilterParams(checkedTags), page: getPage, query: query });
  };

  const handleFilter = () => {
    setParams({ ...getFilterParams(checkedTags), page: 0 });
  };

  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.set('page', (params.page ?? 0).toString());
    window.history.pushState({}, '', url);
  }, [params.page]);

  return (
    <PageTemplate>
      <MetaTag
        title='CS Broker - 문제 목록'
        description='Computer Science 문제를 풀고
AI 기반 문장 유사도 평가 기법을 채점받아
스스로의 CS 역량을 평가할 수 있는 곳입니다.'
        keywords='computer science, database, operating system, data structure, network, developer, '
      />
      <div className={listPageWrapperStyle}>
        <DefaultSlider />
        <div className={listPageMainWrapperStyle}>
          <aside className={asideStyle}>
            <ProblemFilter handleSearchInput={handleSearchInput} handleFilter={handleFilter} />
          </aside>
          <div className={questionListWrapperStyle}>
            <div className={questionListStyle}>
              {data?.contents?.map((problem: IProblemListResponseDataContents) => (
                <QuestionListElementBox
                  title={problem.title}
                  totalSubmission={problem.totalSubmission ?? 0}
                  avgScore={problem.avgScore}
                  tags={problem.tags}
                  key={problem.id}
                  type={problem.type}
                  id={problem.id}
                />
              ))}
            </div>
            <Pagination
              totalPages={data?.totalPages ?? 0}
              page={params.page ?? 0}
              movePrevPage={movePrevPage}
              moveNextPage={moveNextPage}
              changePage={changePage}
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default QuestionListPage;
