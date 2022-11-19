import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import {
  listPageWrapperStyle,
  listPageMainWrapperStyle,
  asideStyle,
  checkedTagListStyle,
  dropdownListStyle,
  filterStyle,
  filterTitleStyle,
  questionListStyle,
  resetButtonStyle,
  filterTitleWrapperStyle,
  questionListWrapperStyle,
  resetButtonTextStyle,
  checkedTagListWrapperStyle,
  checkedTagListTitleIsShownStyle,
} from './style.css';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import {
  IProblemListResponseData,
  IProblemListResponseDataContents,
  IProblemRequestParam,
} from '../../types/api/problem';
import { getFilterParams } from '../../utils/getFilterParams';
import { getTagById } from '../../utils/getTagbyId';
import { BUTTON_TYPE } from '../../types/button';
import { resetSearchProblemInput } from '../../utils/resetSearchProblemInputs';
import { Pagination } from '../../Component/Pagination';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { RefreshIcon } from '../../Icon/RefreshIcon';
import { COLOR } from '../../constants/color';
import { getUserInfo } from '../../utils/userInfo';
import { useNavigate } from 'react-router-dom';
import { useCheckedTags } from '../../hooks/useCheckedTags';

function QuestionListPage() {
  const navigate = useNavigate();
  const [params, setParams] = useState<IProblemRequestParam>();

  const { data } = useQuery<IProblemListResponseData>(
    ['problemList', params],
    () => problemApiWrapper.problemList({ ...params, size: 12 }),
    { enabled: !!params },
  );

  const [page, setPage] = useState(
    parseInt(new URLSearchParams(location.search).get('page') ?? '1') - 1,
  );
  const { checkedTags, handleCheckedTags, resetCheckedTags, onDeleteButtonClick } = useCheckedTags({
    resetPage: () => {
      setNewPage(0);
    },
  });

  const handleSearchInput = () => {
    const query = (document.getElementById('search-problem') as HTMLInputElement).value;
    setParams({ ...getFilterParams(checkedTags), page: page, query: query });
    resetCheckedTags();
    setNewPage(0);
  };

  const setNewPage = (newPage: number) => {
    navigate(location.pathname + `?page=${newPage + 1}`);
    setPage(newPage);
  };

  useEffect(() => {
    setParams({ ...getFilterParams(checkedTags), page: page });
  }, [checkedTags, page]);

  useEffect(() => {
    setPage(parseInt(new URLSearchParams(location.search).get('page') ?? '1') - 1);
  }, [location.search]);

  return (
    <>
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
            <SearchInputBox handleSearchInput={handleSearchInput} />
            <div className={filterStyle}>
              <div className={filterTitleWrapperStyle}>
                <div className={filterTitleStyle}>문제 검색</div>
                <button
                  type={BUTTON_TYPE.BUTTON}
                  className={resetButtonStyle}
                  onClick={() => {
                    resetCheckedTags();
                    resetSearchProblemInput();
                  }}
                >
                  <div className={resetButtonTextStyle}>초기화</div>
                  <RefreshIcon width='1.125rem' height='1.125rem' fill={COLOR.TEXT[7]} />
                </button>
              </div>
              <div className={dropdownListStyle}>
                {getUserInfo()
                  ? TAGLIST.map((tagtype) => (
                      <Dropdown
                        name={tagtype.name}
                        elements={tagtype.elements}
                        checkedTags={checkedTags}
                        handleCheckedTags={handleCheckedTags}
                        key={tagtype.name}
                      />
                    ))
                  : TAGLIST.filter((e) => e.name !== '풀이 여부').map((tagtype) => (
                      <Dropdown
                        name={tagtype.name}
                        elements={tagtype.elements}
                        checkedTags={checkedTags}
                        handleCheckedTags={handleCheckedTags}
                        key={tagtype.name}
                      />
                    ))}
              </div>
              <div className={checkedTagListWrapperStyle}>
                <div
                  className={
                    checkedTagListTitleIsShownStyle[
                      checkedTags.filter((e) => e.isChecked).length ? 'true' : 'false'
                    ]
                  }
                >
                  선택된 필터
                </div>
                <ul className={checkedTagListStyle}>
                  {[...checkedTags]
                    .filter((tag) => tag.isChecked)
                    .map((tag) => {
                      const { name, color } = getTagById(tag.id);
                      return (
                        <TagBox
                          key={tag.id}
                          id={tag.id}
                          name={name}
                          color={color}
                          isFilter
                          onDeleteButtonClick={() => {
                            onDeleteButtonClick(tag.id);
                          }}
                        />
                      );
                    })}
                </ul>
              </div>
            </div>
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
            <Pagination totalPages={data?.totalPages ?? 0} page={page} setPage={setNewPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionListPage;
