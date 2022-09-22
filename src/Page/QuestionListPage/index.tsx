import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import { useAuthStore, useCheckedTagStore } from '../../hooks/useStore';
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
import { PageTemplate } from '../../Template';
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
import { resetSearchProblemInput, resetCheckboxes } from '../../utils/resetSearchProblemInputs';
import { Pagination } from '../../Component/Pagination';
import { ITagState } from '../../types/tag';
import { useQuery } from 'react-query';
import { MetaTag } from '../utils/MetaTag';
import { RefreshIcon } from '../../Icon/RefreshIcon';
import { COLOR } from '../../constants/color';
import { CHECKED_TAGS } from '../../constants/localStorage';

function QuestionListPage() {
  const [params, setParams] = useState<IProblemRequestParam>();
  const { data } = useQuery<IProblemListResponseData>(
    ['problemList', params],
    () => problemApiWrapper.problemList({ ...params, size: 12 }),
    { enabled: !!params },
  );
  const { checkedTags, setCheckedTags } = useCheckedTagStore();
  const [page, setPage] = useState(0);
  const { isLogin } = useAuthStore();

  const setCheckedTagsSync = (newCheckedTags: ITagState[]) => {
    setCheckedTags(newCheckedTags);
    sessionStorage.setItem(CHECKED_TAGS, JSON.stringify(newCheckedTags));
  };

  const handleCheckedTags = (id: string, name: string, isChecked: boolean) => {
    setCheckedTagsSync(
      checkedTags.map((tag: { id: string }) => tag.id).includes(id)
        ? checkedTags.map((tag) => (tag.id === id ? { id, isChecked, name } : tag))
        : [...checkedTags, { id, isChecked, name }],
    );
  };

  const resetCheckedTags = () => {
    resetCheckboxes();
    setCheckedTagsSync([]);
  };

  const handleSearchInput = () => {
    const query = (document.getElementById('search-problem') as HTMLInputElement).value;
    setParams({ ...getFilterParams(checkedTags), page: page, query: query });
    resetCheckedTags();
  };

  useEffect(() => {
    if (page === 0) {
      setParams({ ...getFilterParams(checkedTags), page: page });
    } else {
      setPage(0);
    }
  }, [checkedTags]);

  useEffect(() => {
    setParams({ ...getFilterParams(checkedTags), page: page });
  }, [page]);

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
                {isLogin
                  ? TAGLIST.map((tagtype) => (
                      <Dropdown
                        name={tagtype.name}
                        elements={tagtype.elements}
                        handleCheckedTags={handleCheckedTags}
                        key={tagtype.name}
                      />
                    ))
                  : TAGLIST.filter((e) => e.name !== '풀이 여부').map((tagtype) => (
                      <Dropdown
                        name={tagtype.name}
                        elements={tagtype.elements}
                        handleCheckedTags={handleCheckedTags}
                        key={tagtype.name}
                      />
                    ))}
              </div>
              <div className={checkedTagListWrapperStyle}>
                <div
                  className={checkedTagListTitleIsShownStyle[checkedTags.length ? 'true' : 'false']}
                >
                  선택된 필터
                </div>
                <ul className={checkedTagListStyle}>
                  {[...checkedTags]
                    .filter((tag) => tag.isChecked)
                    .map((tag) => {
                      const { name, color } = getTagById(tag.id);
                      return <TagBox key={tag.id} id={tag.id} name={name} color={color} isFilter />;
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
                  totalSolved={problem.totalSolved ?? 0}
                  avgScore={problem.avgScore}
                  tags={problem.tags}
                  key={problem.id}
                  type={problem.type}
                  id={problem.id}
                />
              ))}
            </div>
            <Pagination totalPages={data?.totalPages ?? 0} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default QuestionListPage;
