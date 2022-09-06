import { IButtonDetail } from '../../../types/button';
import { buttonThemeClass } from '../theme.css';
import { textButtonSizeStyle, textButtonThemeStyle } from './style.css';

function TextButton({
  type,
  theme,
  size,
  onClick,
  children,
  className,
  isActivated = true,
}: IButtonDetail) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonThemeClass} ${textButtonThemeStyle[theme]} ${textButtonSizeStyle[size]} ${className}`}
      style={{ cursor: isActivated ? 'pointer' : 'not-allowed' }}
    >
      {children}
    </button>
  );
}
export default TextButton;
