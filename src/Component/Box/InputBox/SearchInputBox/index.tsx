import { ReactComponent as SearchIcon } from '../../../../assets/icons/search-icon.svg';
import { INPUT_TYPE } from '../../../../constants/input';
import { BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import IconButton from '../../../Button/IconButton';
import { searchInputBoxStyle, inputTextBoxStyle, searchButtonStyle } from './style.css';

interface ISearchInputBox {
  handleSearchInput: () => void;
}

function SearchInputBox({ handleSearchInput }: ISearchInputBox) {
  return (
    <form className={searchInputBoxStyle}>
      <label htmlFor='search-problem'></label>
      <input
        placeholder='검색어를 입력해주세요'
        className={inputTextBoxStyle}
        type={INPUT_TYPE.SEARCH}
        id='search-problem'
      ></input>
      <IconButton
        type={BUTTON_TYPE.BUTTON}
        theme={BUTTON_THEME.PRIMARY}
        onClick={handleSearchInput}
      >
        <SearchIcon className={searchButtonStyle} />
      </IconButton>
    </form>
  );
}

export default SearchInputBox;
