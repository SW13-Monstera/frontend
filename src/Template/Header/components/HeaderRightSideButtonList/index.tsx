import { useNavigate } from 'react-router-dom';
import MyPageIcon from '../../../../Icon/MyPageIcon';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../../../types/button';
import { IconButton, TextButton, TransparentButton } from '../../../../Component/Button';
import {
  buttonListWrapperBeforeLoginStyle,
  iconButtonListWrapperStyle,
  menuStyle,
} from '../../style.css';
import { COLOR } from '../../../../constants/color';
import { ICON } from '../../../../constants/icon';
import { URL } from '../../../../constants/url';
import CustomPopover from '../../../../Component/Utils/Popover';
import { usePopover } from '../../../../hooks/usePopover';
import { Divider } from '../../../../Component/Divider';
import { setLogout } from '../../../../utils/setLogout';
import { DarkmodeButton } from '../../../../Component/Button/DarkmodeButton';
import { getUserInfo } from '../../../../utils/userInfo';

export const RightSideButtonList = () => {
  const navigate = useNavigate();

  const {
    anchorEl: mypageAnchorEl,
    handleClick: handleMypageClick,
    handleClose: handleMypageClose,
    id: mypageId,
    open: mypageOpen,
  } = usePopover();

  function handleLogout() {
    setLogout();
    navigate(URL.MAIN);
    localStorage.clear();
  }

  return (
    <div className={menuStyle}>
      <DarkmodeButton />
      {getUserInfo() ? (
        <div className={iconButtonListWrapperStyle}>
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
  );
};
