import { useEffect } from 'react';
import { DARK_MODE } from '../../../constants/localStorage';
import { useDarkModeStore } from '../../../hooks/useStore';
import { MoonIcon } from '../../../Icon/MoonIcon';
import { SunIcon } from '../../../Icon/SunIcon';
import { darkmodeButtonContentStyle, darkmodeButtonStyle } from './style.css';

export const DarkmodeButton = () => {
  const { isDark, toggleIsDark } = useDarkModeStore();

  useEffect(() => {
    localStorage.setItem(DARK_MODE, JSON.stringify(isDark));
  }, [isDark]);

  return (
    <button type='button' onClick={toggleIsDark} className={darkmodeButtonStyle}>
      <span className={darkmodeButtonContentStyle}>
        {isDark ? (
          <>
            <SunIcon width='16px' height='16px' />
            <span>라이트 모드로 보기</span>
          </>
        ) : (
          <>
            <MoonIcon width='16px' height='16px' />
            <span> 다크 모드로 보기</span>
          </>
        )}
      </span>
    </button>
  );
};
