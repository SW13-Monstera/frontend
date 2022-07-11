import { IButton } from '../../../types/button';
import { textButtonStyle } from './style.css';

function TextButton({ text, type, theme }: IButton) {
  return (
    <button type={type} className={textButtonStyle(theme)}>
      {text}
    </button>
  );
}
export default TextButton;
