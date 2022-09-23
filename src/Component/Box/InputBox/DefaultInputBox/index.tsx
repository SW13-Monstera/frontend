import { IInputBox } from '../../../../types/box';
import { defaultInputBoxStyle, inputBoxClass } from './style.css';

function DefaultInputBox({
  id,
  placeholder,
  type,
  children,
  name,
  onChange,
  defaultValue,
}: IInputBox) {
  return (
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
  );
}
export default DefaultInputBox;
