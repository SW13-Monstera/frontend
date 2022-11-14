import { INPUT_TYPE } from '../../../constants/input';
import { checkboxStyle, checkBoxWrapperStyle, labelTextStyle } from './style.css';

interface ICheckbox {
  id: string;
  label: string;
  name: string;
}

export const Checkbox = ({ id, label, name }: ICheckbox) => {
  return (
    <label htmlFor={id} className={checkBoxWrapperStyle}>
      <input type={INPUT_TYPE.CHECKBOX} id={id} name={name} className={checkboxStyle} />
      <span className={labelTextStyle}>{label}</span>
    </label>
  );
};
