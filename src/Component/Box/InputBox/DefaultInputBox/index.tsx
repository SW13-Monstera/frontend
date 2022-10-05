import { IInputBox } from '../../../../types/box';
import { defaultInputBoxStyle, defaultInputStyle, inputBoxClass, warningStyle } from './style.css';

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
    <div className={defaultInputStyle}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={`${inputBoxClass} ${defaultInputBoxStyle}`}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {children}
      </input>
      {isWarning ? <p className={warningStyle}>{warningMessage}</p> : <></>}
    </div>
  );
}
export default DefaultInputBox;
