/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { INPUT_TYPE } from '../../../constants/input';
import { TAG_MAP_BY_ID } from '../../../constants/tag';
import { IDropdownElement } from '../../../types/util';
import { resetSearchProblemInput } from '../../../utils/resetSearchProblemInputs';

interface IDropdownComponentProps extends IDropdownElement {
  handleCheckedTags: (tagId: string, isChecked: boolean) => void;
}

function DropdownElement({ id, handleCheckedTags }: IDropdownComponentProps) {
  function checkHandler({ target }: ChangeEvent<HTMLInputElement>) {
    handleCheckedTags(target.id, target.checked);
    resetSearchProblemInput();
  }

  return (
    <li css={dropdownContentElementStyle}>
      <input
        type={INPUT_TYPE.CHECKBOX}
        name={TAG_MAP_BY_ID.get(id)?.name}
        id={id}
        onChange={checkHandler}
      />
      <label htmlFor={id}>{TAG_MAP_BY_ID.get(id)?.name}</label>
    </li>
  );
}

const dropdownContentElementStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
`;
export default DropdownElement;
