import { useNavigate } from 'react-router-dom';
import { COLOR } from '../../../constants/color';
import { URL } from '../../../constants/url';
import { useDarkModeStore } from '../../../hooks/useStore';
import { RightArrowWithLineIcon } from '../../../Icon/RightArrowWithLineIcon';
import { CustomButton } from '../CustomButton';
import { problemListButtonStyle } from './style.css';

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
      <span>모든문제 바로가기</span>
      <RightArrowWithLineIcon
        fill={isDark ? COLOR.WHITE : COLOR.PRIMARY}
        width='20px'
        height='20px'
      />
    </CustomButton>
  );
};
