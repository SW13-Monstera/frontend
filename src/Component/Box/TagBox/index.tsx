/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface ITagBox {
  name: string;
}

function TagBox({ name }: ITagBox) {
  return <li css={tagStyle}>{name}</li>;
}

const tagStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 25px;

  background: #fff1cd;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: inherit;

  text-align: center;
`;

export default TagBox;