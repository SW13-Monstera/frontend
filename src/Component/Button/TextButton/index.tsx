import { IButton } from '../../../types/button';
import { buttonThemeClass } from '../theme.css';
import { textButtonThemeStyle } from './style.css';

function TextButton({ type, theme, children }: IButton) {
  return (
    <button type={type} className={`${buttonThemeClass} ${textButtonThemeStyle[theme]}`}>
      {children}
    </button>
  );
}
export default TextButton;
