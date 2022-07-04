/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as DownIcon } from '../../../assets/icons/down-arrow-icon.svg';
import DropdownElement from './DropdownElement';
import listenOutsideClick from '../listenOutsideClick';
import { IDropdownElement } from '../../../types';

interface ITagType {
  name: string;
  type: IDropdownElement[];
}

function Dropdown(tagType: ITagType) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set<string>());
  const menuRef = useRef<HTMLDivElement>(null);

  function onClickDropdown() {
    setIsOpen(!isOpen);
  }

  function checkedItemHandler(id: string, isChecked: boolean) {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  }

  useEffect(listenOutsideClick(menuRef, setIsOpen), []);

  return (
    <div css={dropDownStyle} ref={menuRef}>
      <button css={dropdownBoxStyle} onClick={onClickDropdown} type="button">
        <p>{tagType.name} 선택</p>
        <DownIcon />
      </button>
      <div css={dropDownContentStyle(isOpen)}>
        <ul>
          {tagType.type.map((e) => (
            <DropdownElement
              id={e.id}
              name={e.name}
              checkedItemHandler={checkedItemHandler}
              key={e.id + e.name}
            />
          ))}
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

export default Dropdown;
