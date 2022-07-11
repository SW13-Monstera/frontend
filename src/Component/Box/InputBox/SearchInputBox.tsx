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
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  width: 284px;
  height: 70px;
  left: 239px;
  top: 540px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  padding: 0 20px 0 20px;
`;

const inputTextBoxStyle = css`
  width: 207px;
  height: 24px;

  margin: 5px;

  border: none;
`;

const searchButtonStyle = css`
  margin: 5px;
  cursor: pointer;
`;

export default SearchInputBox;
