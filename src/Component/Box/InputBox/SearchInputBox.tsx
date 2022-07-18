/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { BUTTON_THEME, BUTTON_TYPE } from '../../../types/button';
import IconButton from '../../Button/IconButton';

function SearchInputBox() {
  return (
    <div css={inputBoxStyle}>
      <input placeholder='검색어를 입력해주세요' css={inputTextBoxStyle}></input>
      <IconButton type={BUTTON_TYPE.SUBMIT} theme={BUTTON_THEME.PRIMARY}>
        <SearchIcon css={searchButtonStyle} />
      </IconButton>
    </div>
  );
}

const inputBoxStyle = css`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.875rem;

  width: 100%;
  height: 4.375rem;

  border: 0.0625rem solid #d9d9d9;
  border-radius: 0.625rem;

  padding: 0 1.25rem 0 1.25rem;
`;

const inputTextBoxStyle = css`
  width: 100%;
  height: 24px;

  margin: 5px;

  border: none;

  ::placeholder {
    @media screen and (max-width: 600px) {
      visibility: hidden;
    }
  }
`;

const searchButtonStyle = css`
  width: 1.5rem;
  margin: 0.3125rem;
  cursor: pointer;
`;

export default SearchInputBox;
