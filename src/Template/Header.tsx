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

function Header() {
  const { isLogin } = useAuthStore();
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  return (
    <header css={headerStyle}>
      <LoginModal isModalOpen={isLoginModalOpen} closeModal={closeLoginModal}></LoginModal>
      <Link to='/'>
        <div css={logoStyle}>CS Broker</div>
      </Link>
      <div css={navStyle}>
        <Link to='/list'>문제</Link>
      </div>
      <div css={menuStyle}>
        {isLogin ? (
          <>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <AlarmIcon />
            </IconButton>
            <IconButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY}>
              <MyPageIcon />
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
              <TransparentButton type={BUTTON_TYPE.BUTTON} theme={BUTTON_THEME.PRIMARY} size={BUTTON_SIZE.MEDIUM}>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  width: 100%;
  height: 10%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;

  color: #ffffff;
  background-color: black;
`;

const logoStyle = css`
  padding: 1.25rem;
`;

const navStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;

const menuStyle = css`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 15%;
  padding: 1.25rem;

  svg path {
    fill: white;
    stroke: white;
  }
`;

export default Header;
