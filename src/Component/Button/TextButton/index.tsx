import { IButton } from '../../../types/button';
import { textButtonThemeStyle } from './style.css';

function TextButton({ type, theme, children }: IButton) {
  return (
    <button type={type} className={textButtonThemeStyle[theme]}>
      {children}
    </button>
  );
}
export default TextButton;
