import { Link } from 'react-router-dom';
import { URL } from '../../../constants/url';
import { useDarkModeStore } from '../../../hooks/useStore';
import { RightSideButtonList } from '../components/HeaderRightSideButtonList';
import { NavigationButtonList } from '../components/NavigationButtonList';
import { logoStyle } from '../../Header/style.css';
import logoWhite from '../../../assets/images/csbroker-white.png';
import logo from '../../../assets/images/csbroker.png';
import { bottomWrapperStyle, mobileHeaderStyle, topWrapperStyle } from './style.css';

export const MobileHeader = () => {
  const { isDark } = useDarkModeStore();
  return (
    <div className={mobileHeaderStyle}>
      <div className={topWrapperStyle}>
        <Link to={URL.MAIN}>
          <img src={isDark ? logoWhite : logo} className={logoStyle} width='100px' height='20px' />
        </Link>
        <RightSideButtonList />
      </div>
      <div className={bottomWrapperStyle}>
        <NavigationButtonList />
      </div>
    </div>
  );
};
