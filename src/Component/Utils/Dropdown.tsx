/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import { ReactComponent as DownIcon } from '../../assets/icons/down-arrow-icon.svg';

function Dropdown() {
  const [isSelected, setIsSelected] = useState(false);
  function onClickDropdown() {
    setIsSelected((curr) => !curr);
  }

  return (
    <div css={dropDownStyle}>
      <button css={dropdownBoxStyle} onClick={onClickDropdown} type="button">
        <p>카테고리 선택</p>
        <DownIcon />
      </button>
      <div css={dropDownContentStyle(isSelected)}>
        <ul>
          <li css={dropdownContentElementStyle}>
            <input type="checkbox" name="network" id="nt" />
            <label htmlFor="nt">네트워크</label>
          </li>
          <li css={dropdownContentElementStyle}>
            <input type="checkbox" name="os" id="os" />
            <label htmlFor="os">운영체제</label>
          </li>
          <li css={dropdownContentElementStyle}>
            <input type="checkbox" name="db" id="db" />
            <label htmlFor="db">데이터베이스</label>
          </li>
          <li css={dropdownContentElementStyle}>
            <input type="checkbox" name="ds" id="ds" />
            <label htmlFor="ds">자료구조</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

const dropDownStyle = css`
  position: relative;
  display: inline-block;
`;

const dropdownBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 199px;
  height: 74.09px;

  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  cursor: pointer;
`;
const dropDownContentStyle = (isSelected: boolean) => css`
  position: absolute;

  visibility: ${isSelected ? 'visible' : 'hidden'};

  width: 199px;

  background: #ffffff;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  z-index: 1;
`;

const dropdownContentElementStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default Dropdown;
