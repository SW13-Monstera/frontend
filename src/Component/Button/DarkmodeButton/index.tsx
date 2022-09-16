import { useDarkModeStore } from '../../../hooks/useStore';
import { darkmodeButtonStyle } from './style.css';

export const DarkmodeButton = () => {
  const { isDark, toggleIsDark } = useDarkModeStore();

  return (
    <button type='button' onClick={toggleIsDark} className={darkmodeButtonStyle}>
      {isDark ? <>라이트 모드로 보기</> : <>다크 모드로 보기</>}
    </button>
  );
};
