/** @jsxImportSource @emotion/react */

import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import TagBox from './TagBox';
import { IProblem } from '../../types/problem';

function QuestionListElementBox({ title, numberSolved, averageScore, tagList, id }: IProblem) {
  return (
    <div>
      <Link to={`/list/${id}`} state={{ problemId: id }}>
        <div css={textBoxStyle}>
          <div css={textBoxMainStyle}>
            <p css={titleStyle}>{title}</p>
            <ul css={tagListStyle}>
              {tagList.map((tag) => (
                <TagBox name={tag} key={tag} />
              ))}
            </ul>
          </div>
          <div css={detailWrapperStyle}>
            <p css={detailStyle}>푼 사람 수 : {numberSolved} 명</p>
            <p css={detailStyle}>평균 점수 : {averageScore} 점</p>
          </div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

const textBoxStyle = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  width: 100%;

  color: #000000;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding: 0.625rem;
`;

const textBoxMainStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const titleStyle = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const detailWrapperStyle = css`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const detailStyle = css`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const tagListStyle = css`
  display: flex;
  gap: 2px;
`;

export default QuestionListElementBox;
