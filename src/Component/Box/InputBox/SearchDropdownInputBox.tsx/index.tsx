import { ReactComponent as SearchIcon } from '../../../../assets/icons/search-icon.svg';
import { INPUT_TYPE } from '../../../../constants/input';
import { BUTTON_TYPE } from '../../../../types/button';
import IconButton from '../../../Button/IconButton';
import {
  searchInputBoxStyle,
  inputTextBoxStyle,
  searchButtonStyle,
  dropDownContentStyle,
  dropDownListStyle,
} from './style.css';
import { useEffect, useRef, useState } from 'react';
import listenOutsideClick from '../../../../utils/listenOutsideClick';
import { IDropdownElement } from '../../../../types/util';
import { DropdownElement } from '../../../Utils/DropdownElement';

interface ICheckedValue {
  name: string;
  isChecked: boolean;
}

interface ISearchDropdownInputBox {
  id: string;
  elements: IDropdownElement[];
  searchWithAPI?: () => void;
  defaultValue?: string | string[];
  maxCnt?: number;
}

export function SearchDropdownInputBox({
  id,
  elements,
  searchWithAPI,
  defaultValue = '',
  maxCnt = 1,
}: ISearchDropdownInputBox) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [filteredElements, setfilteredElements] = useState<IDropdownElement[]>(elements);
  const [checkedValues, setCheckedValues] = useState<ICheckedValue[]>(
    typeof defaultValue === 'string'
      ? [{ name: defaultValue, isChecked: true }]
      : defaultValue.map((e) => ({ name: e, isChecked: true } as ICheckedValue)),
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckedTags = (tagId: string, name: string, isChecked: boolean) => {
    // if (checkedValues.length >= maxCnt) return;
    if (isChecked) {
      // if (checkedValues.length >= maxCnt && !checkedValues.map((e) => e.name).includes(name))
      //   return;
      setCheckedValues((prev) => [...prev, { name, isChecked }]);
    } else {
      // if (checkedValues.length + 1 >= maxCnt) return;
      setCheckedValues((prev) => prev.filter((e) => e.name !== name));
    }
    // console.log(isChecked);
    // setCheckedValues((prev) =>
    //   prev.map((tag) => tag.name).includes(name)
    //     ? prev.map((tag) => (tag.name === name ? { isChecked, name } : tag))
    //     : [...prev, { isChecked, name }],
    // );
  };

  const search = () => {
    const inputValue = (document.getElementById(id) as HTMLInputElement).value;
    const searchResult = elements.filter((e) =>
      e.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setfilteredElements(searchResult);
    setIsOpen(true);
  };

  const focusOnInput = () => {
    document.getElementById(id)?.focus();
  };

  useEffect(() => listenOutsideClick(menuRef, setIsOpen), []);

  useEffect(() => {
    setfilteredElements(elements);
  }, [elements]);

  return (
    <div ref={menuRef} onClick={focusOnInput} id={id}>
      <div className={searchInputBoxStyle} onClick={toggleDropdown}>
        <label htmlFor='id'></label>
        <input
          placeholder='검색어를 입력해주세요'
          className={inputTextBoxStyle}
          type={INPUT_TYPE.SEARCH}
          id={id}
          onChange={searchWithAPI ?? search}
          value={checkedValues.map((e) => e.name).join(', ')}
        ></input>
        <IconButton type={BUTTON_TYPE.BUTTON}>
          <SearchIcon className={searchButtonStyle} />
        </IconButton>
      </div>
      <div className={dropDownContentStyle} style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <ul className={dropDownListStyle}>
          {filteredElements.slice(0, 7).map((e) => (
            <DropdownElement
              id={e.id}
              name={e.name}
              handleCheckedTags={handleCheckedTags}
              key={`${e.id}${e.name}`}
              isChecked={
                checkedValues.filter((value) => value.isChecked && value.name === e.name).length > 0
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
