import { ICustomButton, TButtonSize, TButtonTheme } from '../../../types/button';
import { CustomButton } from '../CustomButton';
import { textButtonSizeStyle, textButtonThemeStyle, unactivatedStyle } from './style.css';

interface ITextButton extends ICustomButton {
  theme: TButtonTheme;
  size: TButtonSize;
  isActivated: boolean;
  className?: string;
}

function TextButton({
  type,
  theme,
  size,
  onClick,
  children,
  className,
  isActivated = true,
}: ITextButton) {
  return (
    <CustomButton
      type={type}
      onClick={onClick}
      className={`${className} ${textButtonThemeStyle[theme]} ${textButtonSizeStyle[size]} ${
        !isActivated ? unactivatedStyle : ''
      }`}
    >
      {children}
    </CustomButton>
  );
}
export default TextButton;
