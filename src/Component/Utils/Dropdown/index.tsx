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
      setCheckedItems((prev) => new Set([...prev, id]));
    } else {
      setCheckedItems((prev) => new Set([...prev].filter((currId) => currId !== id)));
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
              key={`${e.id}${e.name}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const dropDownStyle = css`
  position: relative;
  width: 80%;
`;

const dropdownBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 74.09px;

  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;

  cursor: pointer;
`;
const dropDownContentStyle = (isSelected: boolean) => css`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50%;

  visibility: ${isSelected ? 'visible' : 'hidden'};

  width: 100%;

  background: #ffffff;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  z-index: 1;
`;

export default Dropdown;