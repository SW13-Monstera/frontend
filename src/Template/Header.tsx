/** @jsxImportSource @emotion/react */

import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { ReactComponent as AlarmIcon } from '../assets/icons/alarm-icon.svg';
import { ReactComponent as MyPageIcon } from '../assets/icons/mypage-icon.svg';

function Header() {
  return (
    <header css={headerStyle}>
      <Link to="/">
        <div css={logoStyle}>CS Broker</div>
      </Link>
      <div css={navStyle}>
        <Link to="/list">문제</Link>
        <p>고득점 문제 kit</p>
      </div>
      <div css={menuStyle}>
        <AlarmIcon />
        <MyPageIcon />
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
