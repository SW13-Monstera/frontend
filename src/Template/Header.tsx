/** @jsxImportSource @emotion/react */

import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { ReactComponent as AlarmIcon } from '../assets/icons/alarm-icon.svg';
import { ReactComponent as MyPageIcon } from '../assets/icons/mypage-icon.svg';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../types/button';
import { useAuthStore } from '../hooks/useStore';
import { IconButton, TransparentButton } from '../Component/Button';
import useLoginModal from '../hooks/useLoginModal';
import LoginModal from '../Component/Utils/Modal/LoginModal';
import logo from '../assets/images/csbroker.png';

function Header() {
  const { isLogin } = useAuthStore();
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  return (
    <header css={headerStyle}>
      <LoginModal isModalOpen={isLoginModalOpen} closeModal={closeLoginModal}></LoginModal>
      <Link to='/'>
        <img src={logo} css={logoStyle} />
      </Link>
      <div css={navStyle}>
        <Link to='/list'>모든 문제</Link>
      </div>
      <div css={menuStyle}>
        {isLogin ? (
          <>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <AlarmIcon css={iconButtonStyle} />
            </IconButton>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <MyPageIcon css={iconButtonStyle} />
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
            <Link to='/join'>
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

const headerStyle = css`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  width: 100%;
  height: 10%;

  padding-top: 1rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;

  color: #ffffff;
  background-color: black;
`;

const navStyle = css`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const menuStyle = css`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;

  width: 10%;
  padding: 1rem;

  svg path {
    fill: white;
    stroke: white;
  }
`;

const iconButtonStyle = css`
  width: 2rem;
  height: 2rem;
`;

const logoStyle = css`
  width: 12rem;
  padding: 2rem;
`;

export default Header;
