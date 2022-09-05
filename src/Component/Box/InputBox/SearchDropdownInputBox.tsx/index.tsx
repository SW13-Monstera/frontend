import { ReactComponent as SearchIcon } from '../../../../assets/icons/search-icon.svg';
import { INPUT_TYPE } from '../../../../constants/input';
import { BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import IconButton from '../../../Button/IconButton';
import {
  searchInputBoxStyle,
  inputTextBoxStyle,
  searchButtonStyle,
  dropDownContentStyle,
  dropDownListStyle,
  checkedTagListStyle,
} from './style.css';
import { useEffect, useRef, useState } from 'react';
import DropdownElement from '../../../Utils/Dropdown/DropdownElement';
import { ITagState } from '../../../../types/tag';
import TagBox from '../../TagBox';
import listenOutsideClick from '../../../../utils/listenOutsideClick';

interface ISearchDropdownInputBox {
  id: string;
  elements: any[];
}

export function SearchDropdownInputBox({ id, elements }: ISearchDropdownInputBox) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedTags, setCheckedTags] = useState<ITagState[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckedTags = (id: string, name: string, isChecked: boolean) => {
    setCheckedTags((prev) =>
      prev.map((tag) => tag.id).includes(id)
        ? prev.map((tag) => (tag.id === id ? { id, isChecked, name } : tag))
        : [...prev, { id, isChecked, name }],
    );
  };

  useEffect(listenOutsideClick(menuRef, setIsOpen), []);

  return (
    <div ref={menuRef}>
      <div className={searchInputBoxStyle} onClick={toggleDropdown}>
        <label htmlFor='id'></label>
        <input
          placeholder='검색어를 입력해주세요'
          className={inputTextBoxStyle}
          type={INPUT_TYPE.SEARCH}
          id={id}
        ></input>
        <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
          <SearchIcon className={searchButtonStyle} />
        </IconButton>
      </div>
      <div className={dropDownContentStyle} style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
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
      <ul className={checkedTagListStyle}>
        {[...checkedTags]
          .filter((tag) => tag.isChecked)
          .map((tag) => {
            return <TagBox key={tag.id} name={tag.name} />;
          })}
      </ul>
    </div>
  );
}
