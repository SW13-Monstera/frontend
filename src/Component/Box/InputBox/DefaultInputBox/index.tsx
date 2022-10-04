import { IInputBox } from '../../../../types/box';
import { defaultInputBoxStyle, inputBoxClass, warningStyle } from './style.css';

function DefaultInputBox({
  id,
  placeholder,
  type,
  children,
  name,
  isWarning = false,
  warningMessage = '',
  onChange,
  defaultValue,
}: IInputBox) {
  return (
    <div>
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
