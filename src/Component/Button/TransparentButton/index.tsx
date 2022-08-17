import { IButton } from '../../../types/button';
import { transparentButtonStyle } from './style.css';

function TransparentButton({ type, children, className, onClick }: IButton) {
  return (
    <button type={type} className={`${transparentButtonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default TransparentButton;
