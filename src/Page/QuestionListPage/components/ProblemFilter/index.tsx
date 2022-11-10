import TagBox from '../../../../Component/Box/TagBox';
import Dropdown from '../../../../Component/Utils/Dropdown';
import { TAGLIST } from '../../../../constants';
import {
  checkedTagListStyle,
  dropdownListStyle,
  filterStyle,
  filterTitleStyle,
  resetButtonStyle,
  filterTitleWrapperStyle,
  resetButtonTextStyle,
  checkedTagListWrapperStyle,
  checkedTagListTitleIsShownStyle,
} from '../../style.css';

import { getTagById } from '../../../../utils/getTagbyId';
import { BUTTON_TYPE } from '../../../../types/button';
import { resetSearchProblemInput } from '../../../../utils/resetSearchProblemInputs';
import { RefreshIcon } from '../../../../Icon/RefreshIcon';
import { COLOR } from '../../../../constants/color';
import { useCheckedTags } from '../../../../hooks/useCheckedTags';
import { getUserInfo } from '../../../../utils/userInfo';
import { SearchInputBox } from '../../../../Component/Box';

interface IFilter {
  handleSearchInput: () => void;
  handleFilter: () => void;
}

export const ProblemFilter = ({ handleSearchInput, handleFilter }: IFilter) => {
  const { checkedTags, handleCheckedTags, resetCheckedTags, deleteCheckedTag } = useCheckedTags();

  return (
    <>
      <SearchInputBox handleSearchInput={handleSearchInput} />
      <div className={filterStyle} onClick={handleFilter}>
        <div className={filterTitleWrapperStyle}>
          <div className={filterTitleStyle}>문제 검색</div>
          <button
            type={BUTTON_TYPE.BUTTON}
            className={resetButtonStyle}
            onClick={() => {
              resetCheckedTags();
              resetSearchProblemInput();
            }}
          >
            <div className={resetButtonTextStyle}>초기화</div>
            <RefreshIcon width='1.125rem' height='1.125rem' fill={COLOR.TEXT[7]} />
          </button>
        </div>
        <div className={dropdownListStyle}>
          {getUserInfo()
            ? TAGLIST.map((tagtype) => (
                <Dropdown
                  name={tagtype.name}
                  elements={tagtype.elements}
                  handleCheckedTags={handleCheckedTags}
                  key={tagtype.name}
                />
              ))
            : TAGLIST.filter((e) => e.name !== '풀이 여부').map((tagtype) => (
                <Dropdown
                  name={tagtype.name}
                  elements={tagtype.elements}
                  handleCheckedTags={handleCheckedTags}
                  key={tagtype.name}
                />
              ))}
        </div>
        <div className={checkedTagListWrapperStyle}>
          <div
            className={
              checkedTagListTitleIsShownStyle[
                checkedTags.filter((e) => e.isChecked).length ? 'true' : 'false'
              ]
            }
          >
            선택된 필터
          </div>
          <ul className={checkedTagListStyle}>
            {[...checkedTags]
              .filter((tag) => tag.isChecked)
              .map((tag) => {
                const { name, color } = getTagById(tag.id);
                return (
                  <TagBox
                    key={tag.id}
                    id={tag.id}
                    name={name}
                    color={color}
                    isFilter
                    onDeleteButtonClick={() => {
                      deleteCheckedTag(tag.id);
                    }}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};
