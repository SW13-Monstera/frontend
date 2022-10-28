import { textBoxStyle } from './style.css';

interface ITextBoxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

function TextBox({ children, className, id }: ITextBoxProps) {
  return (
    <div id={id} className={`${textBoxStyle} ${className}`}>
      {children}
    </div>
  );
}
export default TextBox;
