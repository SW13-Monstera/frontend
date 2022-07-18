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

  width: 56px;
  height: 24px;

  background: #fff1cd;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.5rem;

  text-align: center;

  padding: 0.0313rem;

  @media screen and (max-width: 600px) {
    width: 56px;
    height: 20px;
  }
`;

export default TagBox;
