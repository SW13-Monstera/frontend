/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import SearchInputBox from '../Component/Box/InputBox/SearchInputBox';
import TextBox from '../Component/Box/TextBox';
import Tag from '../Component/Tag';
import Dropdown from '../Component/Utils/Dropdown';
import Slider from '../Component/Utils/Slider';
import { TAGLIST } from '../constants';
import { listData } from '../data';
import useStore from '../hooks/useStore';
import Header from '../Template/Header';
import { IQuetionListElement } from '../types';

function QuestionListPage() {
  const { checkedTags, handleCheckedTags } = useStore();

  return (
    <>
      <Header />
      <Slider />
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
                <Tag name={tagName} key={tagName} />
              ))}
            </ul>
          </div>
        </aside>

        <div css={questionListStyle}>
          {listData.map((e: IQuetionListElement) => (
            <TextBox
              title={e.title}
              numberSolved={e.numberSolved}
              averageScore={e.averageScore}
              tag={e.tag}
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
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 40px;
`;

const asideStyle = css`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  left: 3%;
  top: 35%;
`;

const filterStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 284px;
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
  font-size: 1.75rem;
  line-height: 2rem;

  color: #000000;
`;

const dropdownListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

const checkedTagListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: 10px;

  width: 50%;
  align-self: center;
`;

const questionListStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const listElementStyle = css`
  grid-column: 1 / 2;
  grid-row: 1;
`;

export default QuestionListPage;
