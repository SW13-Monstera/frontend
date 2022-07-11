import { IButton } from '../../../types/button';
import { buttonThemeClass } from '../theme.css';
import { iconButtonStyle } from './style.css';

function IconButton({ type, children }: IButton) {
  return (
    <button type={type} className={`${buttonThemeClass} ${iconButtonStyle}`}>
      {children}
    </button>
  );
}
export default IconButton;
