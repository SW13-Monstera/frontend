/** @jsxImportSource @emotion/react */

import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { ReactComponent as AlarmIcon } from '../assets/icons/alarm-icon.svg';
import { ReactComponent as MyPageIcon } from '../assets/icons/mypage-icon.svg';

function Header() {
  return (
    <header css={headerStyle}>
      <Link to="/">CS Broker</Link>
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
  padding: 40px;

  width: 100%;
  height: 100px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: #ffffff;
  background-color: black;
`;

const navStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const menuStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  svg path {
    fill: white;
    stroke: white;
  }
`;

export default Header;
