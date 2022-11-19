import { useEffect, useRef, useState } from 'react';
import { DownArrowIcon } from '../../../Icon/DownArrowIcon';
import { UpArrowIcon } from '../../../Icon/UpArrowIcon';
import { themeColors } from '../../../styles/theme.css';
import { BUTTON_TYPE } from '../../../types/button';
import { ITagState } from '../../../types/tag';
import { IDropdownElement } from '../../../types/util';
import listenOutsideClick from '../../../utils/listenOutsideClick';
import { DropdownElement } from '../DropdownElement';
import {
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
  checkedTags: ITagState[];
  handleCheckedTags: (id: string, name: string, isChecked: boolean) => void;
}

function Dropdown({ name, elements, checkedTags, handleCheckedTags }: IDropdownProps) {
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
        {isOpen ? (
          <UpArrowIcon width='.9rem' height='.6rem' fill={themeColors.text[3]} />
        ) : (
          <DownArrowIcon width='.9rem' height='.6rem' fill={themeColors.text[3]} />
        )}
      </button>
      <div className={dropdownContentVisibilityStyle[isOpen ? 'visible' : 'hidden']}>
        <ul className={dropDownListStyle}>
          {elements.map((e) => (
            <DropdownElement
              id={e.id}
              name={e.name}
              handleCheckedTags={handleCheckedTags}
              key={`${e.id}${e.name}`}
              isChecked={checkedTags
                .filter((e) => e.isChecked)
                .map((e) => e.id)
                .includes(e.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
