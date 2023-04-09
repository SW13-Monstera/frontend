import { INPUT_TYPE } from '../../../constants/input';
import { labelTextStyle, radioButtonStyle, radioButtonWrapperStyle } from './style.css';

interface IRadioButton {
  id: string;
  label: string;
  name: string;
}

export const RadioButton = ({ id, label, name }: IRadioButton) => {
  return (
    <label htmlFor={id} className={radioButtonWrapperStyle}>
      <input type={INPUT_TYPE.RADIO} id={id} name={name} className={radioButtonStyle} />
      <span className={labelTextStyle}>{label}</span>
    </label>
  );
};
