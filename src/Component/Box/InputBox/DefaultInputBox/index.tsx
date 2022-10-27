import { IInputBox } from '../../../../types/box';
import {
  defaultInputBoxStyle,
  defaultInputIconStyle,
  defaultInputStyle,
  defaultInputTagStyle,
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
  icon,
}: IInputBox) {
  return (
    <div className={defaultInputWrapperStyle}>
      <div className={defaultInputStyle}>
        <label htmlFor={id}>{label}</label>
        <div className={defaultInputBoxStyle}>
          <image className={defaultInputIconStyle}>{icon}</image>
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            defaultValue={defaultValue}
            className={defaultInputTagStyle}
          >
            {children}
          </input>
        </div>
      </div>
      {isWarning ? <div className={warningStyle}>{warningMessage}</div> : <></>}
    </div>
  );
}
export default DefaultInputBox;
