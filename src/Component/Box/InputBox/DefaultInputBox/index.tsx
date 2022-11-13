import { IInputBox } from '../../../../types/box';
import { WarningTextList } from '../../../Typography/WarningText';
import {
  defaultInputBoxStyle,
  defaultInputIconStyle,
  defaultInputLabelWrapperStyle,
  defaultInputStyle,
  defaultInputTagStyle,
  defaultInputWrapperStyle,
  requiredMarkStyle,
} from './style.css';

function DefaultInputBox({
  id,
  placeholder,
  type,
  children,
  name,
  label,
  isWarning = false,
  warningMessages = [],
  onChange,
  defaultValue,
  icon,
  isRequired = false,
}: IInputBox) {
  return (
    <div className={defaultInputWrapperStyle}>
      <div className={defaultInputStyle}>
        <div className={defaultInputLabelWrapperStyle}>
          <label htmlFor={id}>{label}</label>
          {isRequired ? <span className={requiredMarkStyle}>*</span> : <></>}
        </div>
        <div className={defaultInputBoxStyle}>
          <p className={defaultInputIconStyle}>{icon}</p>
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
      <WarningTextList isShown={isWarning} warningList={warningMessages} />
    </div>
  );
}
export default DefaultInputBox;
