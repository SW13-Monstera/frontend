import { Link } from 'react-router-dom';
import { useDarkModeStore } from '../../hooks/useStore';
import logo from '../../assets/images/csbroker.png';
import logoWhite from '../../assets/images/csbroker-white.png';
import { headerStyle, defaultHeaderStyle, logoStyle, leftSideWrapperStyle } from './style.css';
import { URL } from '../../constants/url';
import { useEffect } from 'react';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { RightSideButtonList } from './components/HeaderRightSideButtonList';
import { NavigationButtonList } from './components/NavigationButtonList';
import { MobileHeader } from './mobile';

const DefaultHeader = () => {
  const { isDark } = useDarkModeStore();
  return (
    <div className={defaultHeaderStyle}>
      <div className={leftSideWrapperStyle}>
        <Link to={URL.MAIN}>
          <img src={isDark ? logoWhite : logo} className={logoStyle} />
        </Link>
        <NavigationButtonList />
      </div>
      <RightSideButtonList />
    </div>
  );
};

function Header() {
  useEffect(() => {
    authApiWrapper.refresh();
  }, []);

  return (
    <header className={headerStyle}>
      <DefaultHeader />
      <MobileHeader />
    </header>
  );
}

export default Header;
