import { Outlet, useNavigate } from 'react-router-dom';
import MyPageIcon from '../../Icon/MyPageIcon';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { useAuthStore, useDarkModeStore } from '../../hooks/useStore';
import { IconButton, TextButton, TransparentButton } from '../../Component/Button';
import logo from '../../assets/images/csbroker.png';
import logoWhite from '../../assets/images/csbroker-white.png';
import {
  buttonListWrapperBeforeLoginStyle,
  headerButtonListStyle,
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
import AlarmIcon from '../../Icon/AlarmIcon';
import { useEffect } from 'react';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { RowBox } from '../../Component/Box/CustomBox';

function Header() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useAuthStore();
  const { isDark } = useDarkModeStore();

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
    navigate(URL.MAIN);
    localStorage.clear();
  }

  useEffect(() => {
    authApiWrapper.refresh();
  }, []);

  return (
    <header className={headerStyle}>
      <div className={leftSideWrapperStyle}>
        <img
          src={isDark ? logoWhite : logo}
          className={logoStyle}
          onClick={() => {
            navigate(URL.MAIN);
          }}
        />
        <RowBox className={headerButtonListStyle}>
          <NavigateProblemListButton
            mainText='모든문제'
            subText='바로가기'
            theme={BUTTON_THEME.PRIMARY}
            link={URL.PROBLEM_LIST}
          />
          <NavigateProblemListButton
            mainText='면접대비'
            subText='세트문제'
            theme={BUTTON_THEME.SECONDARY}
            link={URL.PROBLEM_SET_LIST}
          />
        </RowBox>
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
                <TransparentButton onClick={handleLogout}>로그아웃</TransparentButton>
              </>
            </CustomPopover>
          </div>
        ) : (
          <div className={buttonListWrapperBeforeLoginStyle}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.SECONDARY}
              size={BUTTON_SIZE.SMALL}
              onClick={() => {
                navigate(URL.LOGIN);
              }}
            >
              로그인
            </TextButton>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.SMALL}
              onClick={() => {
                navigate(URL.JOIN);
              }}
            >
              회원가입
            </TextButton>
          </div>
        )}
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
