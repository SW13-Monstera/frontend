import { IButtonDetail } from '../../../types/button';
import { buttonThemeClass } from '../theme.css';
import { textButtonSizeStyle, textButtonThemeStyle } from './style.css';

function TextButton({ type, theme, size, children }: IButtonDetail) {
  return (
    <button
      type={type}
      className={`${buttonThemeClass} ${textButtonThemeStyle[theme]} ${textButtonSizeStyle[size]}`}
    >
      {children}
    </button>
  );
}
export default TextButton;
