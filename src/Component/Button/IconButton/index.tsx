import { IButton } from '../../../types/button';
import { buttonThemeClass } from '../theme.css';
import { iconButtonStyle } from './style.css';

function IconButton({ type, children, onClick }: IButton) {
  return (
    <button type={type} className={`${buttonThemeClass} ${iconButtonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default IconButton;
