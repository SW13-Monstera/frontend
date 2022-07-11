import { textBoxStyle } from './style.css';

interface ITextBoxProps {
  children: JSX.Element | string;
}

function TextBox({ children }: ITextBoxProps) {
  return <div className={textBoxStyle}>{children}</div>;
}
export default TextBox;
