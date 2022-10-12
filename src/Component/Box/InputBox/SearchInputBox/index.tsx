import { INPUT_TYPE } from '../../../../constants/input';
import { BUTTON_TYPE } from '../../../../types/button';
import IconButton from '../../../Button/IconButton';
import { searchInputBoxStyle, inputTextBoxStyle } from './style.css';
import { KeyboardEvent } from 'react';
import { SearchIcon } from '../../../../Icon/SearchIcon';
import { themeColors } from '../../../../styles/theme.css';

interface ISearchInputBox {
  handleSearchInput: () => void;
}

function SearchInputBox({ handleSearchInput }: ISearchInputBox) {
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchInput();
    }
  }
  return (
    <form className={searchInputBoxStyle}>
      <label htmlFor='search-problem'></label>
      <input
        placeholder='검색어를 입력해주세요'
        className={inputTextBoxStyle}
        type={INPUT_TYPE.SEARCH}
        id='search-problem'
        onKeyDown={onKeyDown}
      ></input>
      <IconButton type={BUTTON_TYPE.BUTTON} onClick={handleSearchInput}>
        <SearchIcon width='1.2rem' height='1.2rem' fill={themeColors.text[1]} />
      </IconButton>
    </form>
  );
}

export default SearchInputBox;
