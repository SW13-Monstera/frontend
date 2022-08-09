import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import { useCheckedTagsStore } from '../../hooks/useStore';
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
import { Footer } from '../../Template';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { IProblemListResponseData } from '../../types/api/problem';

function QuestionListPage() {
  const [problemList, setProblemList] = useState<IProblemListResponseData[]>([]);
  const { checkedTags, handleCheckedTags } = useCheckedTagsStore();

  useEffect(() => {
    problemApiWrapper.problemList().then((res) => {
      setProblemList(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <DefaultSlider />
      <main className={pageMainStyle}>
        <aside className={asideStyle}>
          <SearchInputBox />
          <div className={filterStyle}>
            <div className={filterTitleStyle}>필터</div>
            <div className={dropdownListStyle}>
              {TAGLIST.map((tagtype) => (
                <Dropdown
                  name={tagtype.name}
                  elements={tagtype.elements}
                  handleCheckedTags={handleCheckedTags}
                  key={tagtype.name}
                />
              ))}
            </div>
            <ul className={checkedTagListStyle}>
              {[...checkedTags].map((tagName) => (
                <TagBox name={tagName} key={tagName} />
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
      <Footer />
    </>
  );
}

export default QuestionListPage;
