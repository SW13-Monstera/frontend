import { DARK_MODE } from '../../../constants/localStorage';
import { useDarkModeStore } from '../../../hooks/useStore';
import { MoonIcon } from '../../../Icon/MoonIcon';
import { SunIcon } from '../../../Icon/SunIcon';
import {
  darkmodeButtonContentStyle,
  darkmodeButtonStyle,
  darkmodeButtonTextStyle,
} from './style.css';

export const DarkmodeButton = () => {
  const { isDark, toggleIsDark } = useDarkModeStore();

  const onDarkmodeButtonClick = () => {
    localStorage.setItem(DARK_MODE, JSON.stringify(!isDark));
    toggleIsDark();
  };

  return (
    <button type='button' onClick={onDarkmodeButtonClick} className={darkmodeButtonStyle}>
      <span className={darkmodeButtonContentStyle}>
        {isDark ? (
          <>
            <SunIcon width='16px' height='16px' />
            <span className={darkmodeButtonTextStyle}>라이트 모드로 보기</span>
          </>
        ) : (
          <>
            <MoonIcon width='16px' height='16px' />
            <span className={darkmodeButtonTextStyle}> 다크 모드로 보기</span>
          </>
        )}
      </span>
    </button>
  );
};
