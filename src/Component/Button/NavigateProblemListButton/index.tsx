import { useNavigate } from 'react-router-dom';
import { COLOR } from '../../../constants/color';
import { useDarkModeStore } from '../../../hooks/useStore';
import { RightArrowWithLineIcon } from '../../../Icon/RightArrowWithLineIcon';
import { BUTTON_THEME, TButtonTheme } from '../../../types/button';
import { CustomButton } from '../CustomButton';
import {
  mobileNotShownStyle,
  problemListButtonPrimaryStyle,
  problemListButtonSecondaryStyle,
} from './style.css';

interface INavigateProblemListButton {
  mainText: string;
  subText?: string;
  theme: TButtonTheme;
  link: string;
}
export const NavigateProblemListButton = ({
  mainText,
  subText,
  theme,
  link,
}: INavigateProblemListButton) => {
  const { isDark } = useDarkModeStore();
  const navigate = useNavigate();

  return (
    <CustomButton
      className={
        theme === BUTTON_THEME.PRIMARY
          ? problemListButtonPrimaryStyle[isDark ? 'dark' : 'light']
          : problemListButtonSecondaryStyle[isDark ? 'dark' : 'light']
      }
      onClick={() => {
        navigate(link);
      }}
    >
      <span>{mainText}</span>
      <span className={mobileNotShownStyle}>{subText}</span>
      <RightArrowWithLineIcon
        fill={
          theme === BUTTON_THEME.PRIMARY
            ? isDark
              ? COLOR.WHITE
              : COLOR.PRIMARY
            : isDark
            ? COLOR.LINE.c
            : COLOR.TEXT[1]
        }
        width='1.25rem'
        height='1.25rem'
      />
    </CustomButton>
  );
};
