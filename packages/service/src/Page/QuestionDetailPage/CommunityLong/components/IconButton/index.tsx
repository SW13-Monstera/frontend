import { getUserInfo } from 'auth/utils/userInfo';
import { MouseEvent } from 'react';
import { toast } from 'react-toastify';
import { iconButtonStyle } from './style.css';

type Props = {
  children: React.ReactNode;
  text: string;
  onClick: (e: MouseEvent) => void;
};

const IconButton = ({ children, text, onClick }: Props) => {
  const onClickWithLoginStatus = (e: MouseEvent) => {
    const isLogin = !!getUserInfo()?.id;
    if (isLogin) {
      onClick(e);
      return;
    }
    toast('로그인 후 이용해주세요');
  };

  return (
    <button type='button' onClick={onClickWithLoginStatus} className={iconButtonStyle}>
      {children}
      <div>{text}</div>
    </button>
  );
};

export default IconButton;
