import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import { useAuthStore, useCheckedTagsStore } from '../../hooks/useStore';
import Header from '../../Template/Header';
import {
  asideStyle,
  checkedTagListStyle,
  dropdownListStyle,
  filterStyle,
  filterTitleStyle,
  pageMainStyle,
  questionListStyle,
} from './style.css';
import { Footer, PageTemplate } from '../../Template';
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
    const params = { ...getFilterParams(checkedTags), page: page };
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
      <>
        <DefaultSlider />
        <main className={pageMainStyle}>
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
                  <TagBox name={tag.name} key={tag.id} />
                ))}
              </ul>
            </div>
          </aside>

          <div className={questionListStyle}>
            {problemList.map((problem: IProblemListResponseData) => (
              <QuestionListElementBox
                title={problem.title}
                numberSolved={problem.totalSolved}
                averageScore={problem.avgScore}
                tagList={problem.tags}
                key={problem.id}
                id={problem.id}
              />
            ))}
          </div>
        </main>
      </>
    </PageTemplate>
  );
}

export default QuestionListPage;
