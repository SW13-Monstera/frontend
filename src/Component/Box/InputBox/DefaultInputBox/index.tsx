import { defaultInputBoxStyle, inputBoxClass } from './style.css';

interface IInputBox {
  id: string;
  placeholder?: string;
  children?: JSX.Element | string;
}

function DefaultInputBox({ id, placeholder, children }: IInputBox) {
  return (
    <input id={id} placeholder={placeholder} className={`${inputBoxClass} ${defaultInputBoxStyle}`}>
      {children}
    </input>
  );
}
export default DefaultInputBox;
