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
  resetButtonStyle,
  filterTitleWrapperStyle,
} from './style.css';
import { PageTemplate } from '../../Template';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import {
  IProblemListResponseData,
  IProblemListResponseDataContents,
} from '../../types/api/problem';
import { getFilterParams } from '../../utils/getFilterParams';
import { getTagById } from '../../utils/getTagbyId';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { resetSearchProblemInput, resetCheckboxes } from '../../utils/resetSearchProblemInputs';

function QuestionListPage() {
  const [problemList, setProblemList] = useState<IProblemListResponseDataContents[]>([]);
  const { checkedTags, handleCheckedTags, resetCheckedTags } = useCheckedTagsStore();
  const [page, setPage] = useState(0);
  const { isLogin } = useAuthStore();

  function handleSearchInput() {
    const query = (document.getElementById('search-problem') as HTMLInputElement).value;
    const params = { ...getFilterParams(checkedTags), page: page, query: query };
    problemApiWrapper.problemList(params).then((res) => {
      setProblemList(res.data);
    });
    resetCheckedTags(resetCheckboxes);
  }

  useEffect(() => {
    const params = { ...getFilterParams(checkedTags), page: page };
    problemApiWrapper.problemList(params).then((data: IProblemListResponseData) => {
      setProblemList(data.contents);
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
              <div className={filterTitleWrapperStyle}>
                <div className={filterTitleStyle}>문제 검색</div>
                <TextButton
                  type={BUTTON_TYPE.BUTTON}
                  className={resetButtonStyle}
                  onClick={() => {
                    resetCheckedTags(resetCheckboxes);
                    resetSearchProblemInput();
                  }}
                  theme={BUTTON_THEME.SECONDARY}
                  size={BUTTON_SIZE.SMALL}
                >
                  초기화
                </TextButton>
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
              <ul className={checkedTagListStyle}>
                {[...checkedTags]
                  .filter((tag) => tag.isChecked)
                  .map((tag) => {
                    const { name, color } = getTagById(tag.id);
                    return <TagBox key={tag.id} name={name} color={color} />;
                  })}
              </ul>
            </div>
          </aside>

          <div className={questionListStyle}>
            {problemList.map((problem: IProblemListResponseDataContents) => (
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
