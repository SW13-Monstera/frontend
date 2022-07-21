import { IInputBox } from '../../../../types/box';
import { defaultInputBoxStyle, inputBoxClass } from './style.css';

function DefaultInputBox({ id, placeholder, type, children }: IInputBox) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className={`${inputBoxClass} ${defaultInputBoxStyle}`}
    >
      {children}
    </input>
  );
}
export default DefaultInputBox;
