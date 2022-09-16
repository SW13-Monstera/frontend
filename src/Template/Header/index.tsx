import { Link, Outlet, useNavigate } from 'react-router-dom';
import AlarmIcon from '../../Icon/AlarmIcon';
import MyPageIcon from '../../Icon/MyPageIcon';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { useAuthStore } from '../../hooks/useStore';
import { IconButton, TransparentButton } from '../../Component/Button';
import logo from '../../assets/images/csbroker.png';
import {
  headerStyle,
  iconButtonListWrapperStyle,
  leftSideWrapperStyle,
  logoStyle,
  menuStyle,
} from './style.css';
import { COLOR } from '../../constants/color';
import { ICON } from '../../constants/icon';
import { URL } from '../../constants/url';
import CustomPopover from '../../Component/Utils/Popover';
import { usePopover } from '../../hooks/usePopover';
import { Typography } from '@mui/material';
import { Divider } from '../../Component/Divider';
import { setLogout } from '../../utils/setLogout';
import { DarkmodeButton } from '../../Component/Button/DarkmodeButton';
import { NavigateProblemListButton } from '../../Component/Button/NavigateProblemListButton';

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

  function handleLogout() {
    setLogout();
    setIsLogin(false);
  }

  return (
    <header className={headerStyle}>
      <div className={leftSideWrapperStyle}>
        <img
          src={logo}
          className={logoStyle}
          onClick={() => {
            navigate(URL.MAIN);
          }}
        />
        <NavigateProblemListButton />
      </div>
      <div className={menuStyle}>
        <DarkmodeButton />
        {isLogin ? (
          <div className={iconButtonListWrapperStyle}>
            <IconButton type={BUTTON_TYPE.BUTTON} onClick={handleAlarmClick}>
              <AlarmIcon fill={COLOR.TEXT[5]} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
            <CustomPopover
              id={alarmId}
              open={alarmOpen}
              anchorEl={alarmAnchorEl}
              handleClose={handleAlarmClose}
            >
              <Typography sx={{ p: 2 }}>확인하지 않은 알림이 없습니다.</Typography>
            </CustomPopover>
            <IconButton type={BUTTON_TYPE.BUTTON} onClick={handleMypageClick}>
              <MyPageIcon fill={COLOR.PRIMARY} width={ICON.SIZE.SMALL} height={ICON.SIZE.SMALL} />
            </IconButton>
            <CustomPopover
              id={mypageId}
              open={mypageOpen}
              anchorEl={mypageAnchorEl}
              handleClose={handleMypageClose}
            >
              <>
                <TransparentButton
                  onClick={() => {
                    navigate(URL.MYPAGE);
                  }}
                >
                  마이 페이지
                </TransparentButton>
                <Divider />
                <TransparentButton
                  onClick={() => {
                    navigate(URL.NICKNAME);
                  }}
                >
                  닉네임 설정
                </TransparentButton>
                <Divider />
                <TransparentButton onClick={handleLogout}>로그아웃</TransparentButton>
              </>
            </CustomPopover>
          </div>
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
