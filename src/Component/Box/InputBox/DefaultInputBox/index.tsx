import { IInputBox } from '../../../../types/box';
import {
  defaultInputBoxStyle,
  defaultInputStyle,
  defaultInputWrapperStyle,
  warningStyle,
} from './style.css';

function DefaultInputBox({
  id,
  placeholder,
  type,
  children,
  name,
  label,
  isWarning = false,
  warningMessage = '',
  onChange,
  defaultValue,
}: IInputBox) {
  return (
    <div className={defaultInputWrapperStyle}>
      <div className={defaultInputStyle}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          className={defaultInputBoxStyle}
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {children}
        </input>
      </div>
      {isWarning ? <div className={warningStyle}>{warningMessage}</div> : <></>}
    </div>
  );
}
export default DefaultInputBox;
