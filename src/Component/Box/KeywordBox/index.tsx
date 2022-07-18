/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface IKeywordBox {
  name: string;
  isIncluded: boolean;
}

function KeywordBox({ name, isIncluded }: IKeywordBox) {
  return <li css={keywordBoxStyle(isIncluded)}>{name}</li>;
}

const keywordBoxStyle = (isIncluded: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 110px;
  height: 43px;

  background-color: ${isIncluded ? '#FF6D6D' : '#d9d9d9'};
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  text-align: center;
`;

export default KeywordBox;
