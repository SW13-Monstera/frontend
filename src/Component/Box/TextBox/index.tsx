import { textBoxStyle } from './style.css';

interface ITextBoxProps {
  children: JSX.Element | string;
  className?: string;
}

function TextBox({ children, className }: ITextBoxProps) {
  return <div className={`${textBoxStyle} ${className}`}>{children}</div>;
}
export default TextBox;
