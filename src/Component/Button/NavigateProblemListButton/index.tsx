import { useNavigate } from 'react-router-dom';
import { COLOR } from '../../../constants/color';
import { URL } from '../../../constants/url';
import { useDarkModeStore } from '../../../hooks/useStore';
import { RightArrowWithLineIcon } from '../../../Icon/RightArrowWithLineIcon';
import { CustomButton } from '../CustomButton';
import { problemListButtonStyle, mobileNotShownStyle } from './style.css';

export const NavigateProblemListButton = () => {
  const { isDark } = useDarkModeStore();
  const navigate = useNavigate();

  return (
    <CustomButton
      className={problemListButtonStyle[isDark ? 'dark' : 'light']}
      onClick={() => {
        navigate(URL.PROBLEM_LIST);
      }}
    >
      <span>모든문제</span>
      <span className={mobileNotShownStyle}>바로가기</span>
      <RightArrowWithLineIcon
        fill={isDark ? COLOR.WHITE : COLOR.PRIMARY}
        width='1.25rem'
        height='1.25rem'
      />
    </CustomButton>
  );
};
