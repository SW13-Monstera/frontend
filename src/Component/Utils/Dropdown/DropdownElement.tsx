/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { INPUT_TYPE } from '../../../constants/input';
import { IDropdownElement } from '../../../types/util';
import { resetSearchProblemInput } from '../../../utils/resetSearchProblemInputs';

interface IDropdownComponentProps extends IDropdownElement {
  handleCheckedTags: (tagId: string, isChecked: boolean) => void;
}

function DropdownElement({ id, name, handleCheckedTags }: IDropdownComponentProps) {
  function checkHandler({ target }: ChangeEvent<HTMLInputElement>) {
    handleCheckedTags(target.id, target.checked);
    resetSearchProblemInput();
  }

  return (
    <li css={dropdownContentElementStyle}>
      <input type={INPUT_TYPE.CHECKBOX} name={name} id={id} onChange={checkHandler} />
      <label htmlFor={id}>{name}</label>
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
