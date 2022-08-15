/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as DownIcon } from '../../../assets/icons/down-arrow-icon.svg';
import { ReactComponent as UpIcon } from '../../../assets/icons/up-arrow-icon.svg';
import DropdownElement from './DropdownElement';
import listenOutsideClick from '../listenOutsideClick';
import { BUTTON_TYPE } from '../../../types/button';
import { IDropdownElement } from '../../../types/util';
import { ITag } from '../../../types/problem';

interface ITagType {
  name: string;
  elements: IDropdownElement[];
}

interface IDropdownProps extends ITagType {
  handleCheckedTags: (tag: ITag, isChecked: boolean) => void;
}

function Dropdown({ name, elements, handleCheckedTags }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function onClickDropdown() {
    setIsOpen(!isOpen);
  }

  useEffect(listenOutsideClick(menuRef, setIsOpen), []);

  return (
    <div css={dropDownStyle} ref={menuRef}>
      <button css={dropdownBoxStyle} onClick={onClickDropdown} type={BUTTON_TYPE.BUTTON}>
        <p>{name} 선택</p>
        {isOpen ? <UpIcon css={downIconStyle} /> : <DownIcon css={downIconStyle} />}
      </button>
      <div css={dropDownContentStyle(isOpen)}>
        <ul css={dropDownListStyle}>
          {elements.map((e) => (
            <DropdownElement
              id={e.id}
              name={e.name}
              handleCheckedTags={handleCheckedTags}
              key={`${e.id}${e.name}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const dropDownStyle = css`
  box-sizing: border-box;
  position: relative;
  width: 100%;
`;

const dropdownBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 4.6306rem;

  background: #ffffff;
  border: 0.0625rem solid #d8d8d8;
  border-radius: 0.625rem;

  padding: 0.625rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  cursor: pointer;
`;
const dropDownContentStyle = (isSelected: boolean) => css`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 50%;

  visibility: ${isSelected ? 'visible' : 'hidden'};

  width: 100%;

  background: #ffffff;
  border-radius: 0.625rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;

  filter: drop-shadow(0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25));

  z-index: 1;
`;

const dropDownListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const downIconStyle = css`
  width: 0.5rem;
`;

export default Dropdown;
