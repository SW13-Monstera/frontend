import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import { useAuthStore, useCheckedTagsStore } from '../../hooks/useStore';
import {
  listPageWrapperStyle,
  listPageMainWrapperStyle,
  asideStyle,
  checkedTagListStyle,
  dropdownListStyle,
  filterStyle,
  filterTitleStyle,
  questionListStyle,
} from './style.css';
import { PageTemplate } from '../../Template';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { IProblemListResponseData } from '../../types/api/problem';
import { getFilterParams } from '../../utils/getFilterParams';

function QuestionListPage() {
  const [problemList, setProblemList] = useState<IProblemListResponseData[]>([]);
  const { checkedTags, handleCheckedTags } = useCheckedTagsStore();
  const [page, setPage] = useState(0);
  const { isLogin } = useAuthStore();

  function handleSearchInput() {
    const query = (document.getElementById('search-problem') as HTMLInputElement).value;
    const params = { ...getFilterParams(checkedTags), page: page, query: query };
    problemApiWrapper.problemList(params).then((res) => {
      setProblemList(res.data);
    });
  }

  useEffect(() => {
    const params = { ...getFilterParams(checkedTags), page: page };
    problemApiWrapper.problemList(params).then((res) => {
      setProblemList(res.data);
    });
  }, [checkedTags]);

  return (
    <PageTemplate>
      <div className={listPageWrapperStyle}>
        <DefaultSlider />
        <div className={listPageMainWrapperStyle}>
          <aside className={asideStyle}>
            <SearchInputBox handleSearchInput={handleSearchInput} />
            <div className={filterStyle}>
              <div className={filterTitleStyle}>필터</div>
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
              <ul className={checkedTagListStyle}>
                {[...checkedTags].map((tag) => (
                  <TagBox tagId={tag.id} key={tag.id} />
                ))}
              </ul>
            </div>
          </aside>

          <div className={questionListStyle}>
            {problemList.map((problem: IProblemListResponseData) => (
              <QuestionListElementBox
                title={problem.title}
                numberSolved={problem.totalSolved ?? 0}
                averageScore={problem.avgScore ?? 0}
                tagList={problem.tags}
                key={problem.id}
                id={problem.id.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default QuestionListPage;
