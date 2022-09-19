import { useEffect, useRef, useState } from 'react';
import { ReactComponent as DownIcon } from '../../../assets/icons/down-arrow-icon.svg';
import { ReactComponent as UpIcon } from '../../../assets/icons/up-arrow-icon.svg';
import { BUTTON_TYPE } from '../../../types/button';
import { IDropdownElement } from '../../../types/util';
import listenOutsideClick from '../../../utils/listenOutsideClick';
import { DropdownElement } from '../DropdownElement';
import {
  downIconStyle,
  dropdownBoxStyle,
  dropdownContentVisibilityStyle,
  dropDownListStyle,
  dropDownStyle,
} from './style.css';

interface ITagType {
  name: string;
  elements: IDropdownElement[];
}

interface IDropdownProps extends ITagType {
  handleCheckedTags: (id: string, name: string, isChecked: boolean) => void;
}

function Dropdown({ name, elements, handleCheckedTags }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function onClickDropdown() {
    setIsOpen(!isOpen);
  }

  useEffect(() => listenOutsideClick(menuRef, setIsOpen), []);

  return (
    <div className={dropDownStyle} ref={menuRef}>
      <button className={dropdownBoxStyle} onClick={onClickDropdown} type={BUTTON_TYPE.BUTTON}>
        <p>{name} 선택</p>
        {isOpen ? <UpIcon className={downIconStyle} /> : <DownIcon className={downIconStyle} />}
      </button>
      <div className={dropdownContentVisibilityStyle[isOpen ? 'visible' : 'hidden']}>
        <ul className={dropDownListStyle}>
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

export default Dropdown;
