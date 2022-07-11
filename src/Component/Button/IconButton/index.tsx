import { IButton } from '../../../types/button';
import { iconButtonStyle } from './style.css';

function IconButton({ type, children }: IButton) {
  return (
    <button type={type} className={iconButtonStyle}>
      {children}
    </button>
  );
}
export default IconButton;
