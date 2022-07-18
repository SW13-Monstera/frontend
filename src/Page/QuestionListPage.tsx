/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SearchInputBox from '../Component/Box/InputBox/SearchInputBox';
import QuestionListElementBox from '../Component/Box/QuestionListElementBox';
import TagBox from '../Component/Box/TagBox';
import Dropdown from '../Component/Utils/Dropdown';
import DefaultSlider from '../Component/Utils/DefaultSlider';
import { TAGLIST } from '../constants';
import { listData } from '../data';
import { useCheckedTagsStore } from '../hooks/useStore';
import Header from '../Template/Header';
import { IProblem } from '../types/problem';

function QuestionListPage() {
  const { checkedTags, handleCheckedTags } = useCheckedTagsStore();

  return (
    <>
      <Header />
      <DefaultSlider />
      <main css={pageMainStyle}>
        <aside css={asideStyle}>
          <SearchInputBox />
          <div css={filterStyle}>
            <div css={filterTitleStyle}>필터</div>
            <div css={dropdownListStyle}>
              {TAGLIST.map((tagtype) => (
                <Dropdown
                  name={tagtype.name}
                  elements={tagtype.elements}
                  handleCheckedTags={handleCheckedTags}
                  key={tagtype.name}
                />
              ))}
            </div>
            <ul css={checkedTagListStyle}>
              {[...checkedTags].map((tagName) => (
                <TagBox name={tagName} key={tagName} />
              ))}
            </ul>
          </div>
        </aside>

        <div css={questionListStyle}>
          {listData.map((e: IProblem) => (
            <QuestionListElementBox
              title={e.title}
              numberSolved={e.numberSolved}
              averageScore={e.averageScore}
              tagList={e.tagList}
              key={e.id}
              id={e.id}
              css={listElementStyle}
            />
          ))}
        </div>
      </main>
    </>
  );
}

const pageMainStyle = css`
  display: flex;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  padding: 40px;
`;

const asideStyle = css`
  box-sizing: border-box;
  position: fixed;

  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 15.625rem;
  height: 12.5rem;
`;

const filterStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  width: 100%;
  height: fit-content;

  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding: 1.25rem;
`;

const filterTitleStyle = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;

  color: #000000;
`;

const dropdownListStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const checkedTagListStyle = css`
  box-sizing: border-box;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-gap: 0.2rem;

  justify-items: center;
`;

const questionListStyle = css`
  box-sizing: border-box;
  margin-left: 18.75rem;

  width: 65%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const listElementStyle = css`
  flex: 1;
`;

export default QuestionListPage;
