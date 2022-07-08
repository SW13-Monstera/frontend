/** @jsxImportSource @emotion/react */

import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { IQuetionListElement } from '../../types';

function TextBox({ title, numberSolved, averageScore, tag, id }: IQuetionListElement) {
  return (
    <div>
      <Link to={`/list/${id}`} state={{ problemId: id }} css={linkStyle}>
        <div css={textBoxStyle}>
          <p css={titleStyle}>{title}</p>
          <div>
            <p css={detailStyle}>푼 사람 수 : {numberSolved} 명</p>
            <p css={detailStyle}>평균 점수 : {averageScore} 점</p>
          </div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

const linkStyle = css`
  display: block;
`;

const textBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;

  width: 100%;

  color: #000000;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding: 0 10px 0 10px;
`;

const titleStyle = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 34px;
`;

const detailStyle = css`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export default TextBox;
