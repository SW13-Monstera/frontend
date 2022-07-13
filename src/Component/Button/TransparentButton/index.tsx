import { IButton } from '../../../types/button';
import { transparentButtonStyle } from './style.css';

function TransparentButton({ type, children, onClick }: IButton) {
  return (
    <button type={type} className={transparentButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
export default TransparentButton;
