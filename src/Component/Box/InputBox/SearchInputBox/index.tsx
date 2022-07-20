import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { INPUT_TYPE } from '../../../../constants/input';
import { BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import IconButton from '../../../Button/IconButton';
import { inputBoxStyle, inputTextBoxStyle, searchButtonStyle } from './style.css';

function SearchInputBox() {
  return (
    <div css={inputBoxStyle}>
      <input
        placeholder='검색어를 입력해주세요'
        css={inputTextBoxStyle}
        type={INPUT_TYPE.SEARCH}
      ></input>
      <IconButton type={BUTTON_TYPE.SUBMIT} theme={BUTTON_THEME.PRIMARY}>
        <SearchIcon css={searchButtonStyle} />
      </IconButton>
    </div>
  );
}

export default SearchInputBox;
