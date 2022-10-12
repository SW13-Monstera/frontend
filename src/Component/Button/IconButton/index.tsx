import { ICustomButton } from '../../../types/button';
import { CustomButton } from '../CustomButton';
import { buttonThemeClass } from '../theme.css';

function IconButton({ type, children, onClick, className }: ICustomButton) {
  return (
    <CustomButton type={type} className={`${buttonThemeClass} ${className}`} onClick={onClick}>
      {children}
    </CustomButton>
  );
}
export default IconButton;
