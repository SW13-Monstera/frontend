/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as AlarmIcon } from '../assets/icons/alarm-icon.svg';
import { ReactComponent as MyPageIcon } from '../assets/icons/mypage-icon.svg';

function Header() {
  return (
    <header css={headerStyle}>
      <h1>CS Broker</h1>
      <nav css={navStyle}>
        <div>
          <p>모든 문제</p>
          <p>고득점 문제 kit</p>
        </div>
        <div>
          <AlarmIcon />
          <MyPageIcon />
        </div>
      </nav>
    </header>
  );
}

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 40px;
  height: 100px;
  color: white;
  background-color: black;
`;

const navStyle = css`
  display: flex;
  align-items: center;
  gap: 13px;
  font-weight: bold;
  padding: 40px;
  height: 100px;
  svg path {
    fill: white;
    stroke: white;
  }
`;

export default Header;
