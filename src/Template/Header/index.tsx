import { Link, Outlet, useNavigate } from 'react-router-dom';
import AlarmIcon from '../../Icon/AlarmIcon';
import MyPageIcon from '../../Icon/MyPageIcon';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { useAuthStore } from '../../hooks/useStore';
import { IconButton, TransparentButton } from '../../Component/Button';
import logo from '../../assets/images/csbroker.png';
import { headerStyle, logoStyle, menuStyle, navStyle } from './style.css';
import { COLOR } from '../../constants/color';
import { ICON } from '../../constants/icon';
import { URL } from '../../constants/url';
import CustomPopover from '../../Component/Utils/Popover';
import { usePopover } from '../../hooks/usePopover';
import { Typography } from '@mui/material';
import { Divider } from '../../Component/Divider';
import { removeUserInfo } from '../../utils/userInfo';
import { AUTHORIZTION } from '../../constants/api';
import apiClient from '../../api/apiClient';

function Header() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useAuthStore();

  const {
    anchorEl: alarmAnchorEl,
    handleClick: handleAlarmClick,
    handleClose: handleAlarmClose,
    id: alarmId,
    open: alarmOpen,
  } = usePopover();
  const {
    anchorEl: mypageAnchorEl,
    handleClick: handleMypageClick,
    handleClose: handleMypageClose,
    id: mypageId,
    open: mypageOpen,
  } = usePopover();

  function handleNicknamePage() {
    navigate(URL.NICKNAME);
  }

  function handleLogout() {
    removeUserInfo();
    setIsLogin(false);
    delete apiClient.defaults.headers.common[AUTHORIZTION];
  }

  return (
    <header className={headerStyle}>
      <Link to={URL.MAIN}>
        <img src={logo} className={logoStyle} />
      </Link>
      <div className={navStyle}>
        <Link to={URL.PROBLEM_LIST}>모든 문제</Link>
      </div>
      <div className={menuStyle}>
        {isLogin ? (
          <>
            <IconButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              onClick={handleAlarmClick}
            >
              <AlarmIcon fill={COLOR.WHITE} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
            <CustomPopover
              id={alarmId}
              open={alarmOpen}
              anchorEl={alarmAnchorEl}
              handleClose={handleAlarmClose}
            >
              <Typography sx={{ p: 2 }}>확인하지 않은 알림이 없습니다.</Typography>
            </CustomPopover>
            <IconButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              onClick={handleMypageClick}
            >
              <MyPageIcon fill={COLOR.WHITE} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
            <CustomPopover
              id={mypageId}
              open={mypageOpen}
              anchorEl={mypageAnchorEl}
              handleClose={handleMypageClose}
            >
              <>
                <TransparentButton onClick={handleNicknamePage}>닉네임 설정</TransparentButton>
                <Divider />
                <TransparentButton onClick={handleLogout}>로그아웃</TransparentButton>
              </>
            </CustomPopover>
          </>
        ) : (
          <>
            <Link to={URL.LOGIN}>
              <TransparentButton
                type={BUTTON_TYPE.BUTTON}
                theme={BUTTON_THEME.PRIMARY}
                size={BUTTON_SIZE.MEDIUM}
              >
                로그인
              </TransparentButton>
            </Link>
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
