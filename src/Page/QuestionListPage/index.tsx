import SearchInputBox from '../../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../../Component/Box/QuestionListElementBox';
import TagBox from '../../Component/Box/TagBox';
import Dropdown from '../../Component/Utils/Dropdown';
import DefaultSlider from '../../Component/Utils/DefaultSlider';
import { TAGLIST } from '../../constants';
import { listData } from '../../data';
import { useCheckedTagsStore } from '../../hooks/useStore';
import Header from '../../Template/Header';
import { IProblem } from '../../types/problem';
import {
  asideStyle,
  checkedTagListStyle,
  dropdownListStyle,
  filterStyle,
  filterTitleStyle,
  pageMainStyle,
  questionListStyle,
} from './style.css';

function QuestionListPage() {
  const { checkedTags, handleCheckedTags } = useCheckedTagsStore();

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
          {listData.map((e: IProblem) => (
            <QuestionListElementBox
              title={e.title}
              numberSolved={e.numberSolved}
              averageScore={e.averageScore}
              tagList={e.tagList}
              key={e.id}
              id={e.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default QuestionListPage;
