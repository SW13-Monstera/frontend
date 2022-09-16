import { ChangeEvent } from 'react';
import { INPUT_TYPE } from '../../../constants/input';
import { IDropdownElement } from '../../../types/util';
import { dropdownContentElementStyle } from './style.css';

interface IDropdownComponentProps extends IDropdownElement {
  handleCheckedTags: (tagId: string, name: string, isChecked: boolean) => void;
}

export function DropdownElement({ id, name, handleCheckedTags }: IDropdownComponentProps) {
  function checkHandler({ target }: ChangeEvent<HTMLInputElement>) {
    handleCheckedTags(target.id, target.name, target.checked);
  }

  return (
    <li className={dropdownContentElementStyle}>
      <input type={INPUT_TYPE.CHECKBOX} name={name} id={id} onChange={checkHandler} />
      <label htmlFor={id}>{name}</label>
    </li>
  );
}
