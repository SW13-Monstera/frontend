import { ChangeEvent, MouseEvent } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_TYPE } from '../../../constants/input';
import { Checkbox } from '../../../Icon/Checkbox';
import { CheckboxChecked } from '../../../Icon/CheckboxChecked';
import { themeColors } from '../../../styles/theme.css';
import { IDropdownElement } from '../../../types/util';
import {
  dropdownContentElementStyle,
  checkboxStyle,
  checkboxDefaultStyle,
  labelIsCheckedStyle,
} from './style.css';

interface IDropdownComponentProps extends IDropdownElement {
  isChecked?: boolean;
  handleCheckedTags: (tagId: string, name: string, isChecked: boolean) => void;
}

export function DropdownElement({
  id,
  name,
  handleCheckedTags,
  isChecked = false,
}: IDropdownComponentProps) {
  function checkHandler({ target }: ChangeEvent<HTMLInputElement>) {
    handleCheckedTags(target.id, target.name, target.checked);
  }
  const onCheckboxClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const inputElement = event.currentTarget.previousSibling as HTMLInputElement;
    handleCheckedTags(inputElement.id, inputElement.name, !isChecked);
    inputElement.checked = !isChecked;
  };

  return (
    <li className={dropdownContentElementStyle}>
      <input
        type={INPUT_TYPE.CHECKBOX}
        name={name}
        id={id}
        onChange={checkHandler}
        className={checkboxDefaultStyle}
      />
      <span className={checkboxStyle} onClick={onCheckboxClick}>
        {isChecked ? (
          <CheckboxChecked
            width='1.25rem'
            height='1.25rem'
            fill={COLOR.PRIMARY}
            id={`checkbox-${id}--checked`}
          />
        ) : (
          <Checkbox
            width='1.25rem'
            height='1.25rem'
            fill={themeColors.text[3]}
            id={`checkbox-${id}`}
          />
        )}
      </span>

      <label
        htmlFor={id}
        className={isChecked ? labelIsCheckedStyle.true : labelIsCheckedStyle.false}
      >
        {name}
      </label>
    </li>
  );
}
