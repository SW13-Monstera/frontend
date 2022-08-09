import { Link, Outlet } from 'react-router-dom';
import AlarmIcon from '../../Icon/AlarmIcon';
import MyPageIcon from '../../Icon/MyPageIcon';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { useAuthStore } from '../../hooks/useStore';
import { IconButton, TransparentButton } from '../../Component/Button';
import useLoginModal from '../../hooks/useLoginModal';
import LoginModal from '../../Component/Utils/Modal/LoginModal';
import logo from '../../assets/images/csbroker.png';
import { headerStyle, logoStyle, menuStyle, navStyle } from './style.css';
import { COLOR } from '../../constants/color';
import { ICON } from '../../constants/icon';
import { URL } from '../../constants/url';

function Header() {
  const { isLogin } = useAuthStore();
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  return (
    <header className={headerStyle}>
      <LoginModal isModalOpen={isLoginModalOpen} closeModal={closeLoginModal}></LoginModal>
      <Link to={URL.MAIN}>
        <img src={logo} className={logoStyle} />
      </Link>
      <div className={navStyle}>
        <Link to={URL.PROBLEM_LIST}>모든 문제</Link>
      </div>
      <div className={menuStyle}>
        {isLogin ? (
          <>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <AlarmIcon fill={COLOR.WHITE} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <MyPageIcon fill={COLOR.WHITE} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
          </>
        ) : (
          <>
            <TransparentButton
              type={BUTTON_TYPE.BUTTON}
              onClick={openLoginModal}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              로그인
            </TransparentButton>
            <Link to={URL.JOIN}>
              <TransparentButton
                type={BUTTON_TYPE.BUTTON}
                theme={BUTTON_THEME.PRIMARY}
                size={BUTTON_SIZE.MEDIUM}
              >
                회원가입
              </TransparentButton>
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
