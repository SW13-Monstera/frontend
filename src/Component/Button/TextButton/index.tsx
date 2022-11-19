import { ICustomButton, TButtonSize, TButtonTheme } from '../../../types/button';
import { CustomButton } from '../CustomButton';
import { textButtonSizeStyle, textButtonThemeStyle, unactivatedStyle } from './style.css';

interface ITextButton extends ICustomButton {
  theme: TButtonTheme;
  size: TButtonSize;
  isActivated?: boolean;
  className?: string;
  tag?: string;
}

function TextButton({
  type,
  theme,
  size,
  onClick,
  children,
  className,
  tag,
  isActivated = true,
}: ITextButton) {
  return (
    <CustomButton
      type={type}
      onClick={
        isActivated
          ? onClick
          : () => {
              return;
            }
      }
      className={`${className} ${textButtonThemeStyle[theme]} ${textButtonSizeStyle[size]} ${
        !isActivated ? unactivatedStyle : ''
      } `}
      tag={tag}
    >
      {children}
    </CustomButton>
  );
}
export default TextButton;
