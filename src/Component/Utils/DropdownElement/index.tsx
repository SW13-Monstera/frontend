import { MouseEvent } from 'react';
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
  isCheckbox?: boolean;
  handleCheckedTags: (tagId: string, name: string, isChecked: boolean) => void;
}

export function DropdownElement({
  id,
  name,
  handleCheckedTags,
  isChecked = false,
  isCheckbox = false,
}: IDropdownComponentProps) {
  const onCheckboxClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const inputElement = event.currentTarget.firstChild as HTMLInputElement;
    handleCheckedTags(inputElement.id, inputElement.name, !isChecked);
    inputElement.checked = !isChecked;
  };

  return (
    <li className={dropdownContentElementStyle} onClick={onCheckboxClick}>
      <input
        type={isCheckbox ? INPUT_TYPE.CHECKBOX : INPUT_TYPE.RADIO}
        name={name}
        id={id}
        className={checkboxDefaultStyle}
      />
      <span className={checkboxStyle}>
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
      <label className={isChecked ? labelIsCheckedStyle.true : labelIsCheckedStyle.false}>
        {name}
      </label>
    </li>
  );
}
