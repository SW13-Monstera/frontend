/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { IDropdownElement } from '../../../types';

interface IDropdownComponentProps extends IDropdownElement {
  checkedItemHandler: (id: string, isChecked: boolean) => void;
}

function DropdownElement({ id, name, checkedItemHandler }: IDropdownComponentProps) {
  const [isChecked, setIsChecked] = useState(false);
  function checkHandler({ target }: ChangeEvent<HTMLInputElement>) {
    setIsChecked(!isChecked);
    checkedItemHandler(target.id, target.checked);
  }

  return (
    <li css={dropdownContentElementStyle}>
      <input type="checkbox" name={name} id={id} onChange={(e) => checkHandler(e)} />
      <label htmlFor={id}>{name}</label>
    </li>
  );
}

const dropdownContentElementStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export default DropdownElement;
