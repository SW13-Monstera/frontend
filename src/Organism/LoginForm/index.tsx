import { MouseEvent } from 'react';
import { DefaultInputBox } from '../../Component/Box';
import { etcButtonStyle, etcStyle, loginFormContentStyle, loginFormStyle } from './style.css';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import HorizontalOAuthButtonList from '../ButtonList/HorizontalOAuthButtonList';
import { INPUT_TYPE } from '../../constants/input';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';

interface ILoginForm {
  closeModal?: () => void;
  handleSubmit: (event: MouseEvent) => Promise<boolean> | undefined;
}

function LoginForm({ handleSubmit }: ILoginForm) {
  const navigate = useNavigate();

  function handleLogin(event: MouseEvent) {
    event.preventDefault();
    handleSubmit(event)?.then((isLoginSuccess) => {
      if (isLoginSuccess) {
        navigate(-1);
      }
    });
  }

  return (
    <div className={loginFormStyle}>
      <form className={loginFormContentStyle}>
        <DefaultInputBox
          id='email'
          name='email'
          placeholder='이메일을 입력해주세요'
          type={INPUT_TYPE.EMAIL}
          label='이메일'
        />
        <DefaultInputBox
          id='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          type={INPUT_TYPE.PASSWORD}
          label='비밀번호'
        />
        <TextButton
          theme={BUTTON_THEME.PRIMARY}
          size={BUTTON_SIZE.LARGE}
          type={BUTTON_TYPE.SUBMIT}
          onClick={handleLogin}
        >
          로그인
        </TextButton>
      </form>
      <div className={etcStyle}>
        <button className={etcButtonStyle} onClick={() => navigate(URL.SEND_CHANGE_PASSWORD_EMAIL)}>
          비밀번호 찾기
        </button>
        |
        <button
          className={etcButtonStyle}
          onClick={() => {
            navigate(URL.JOIN);
          }}
        >
          회원가입
        </button>
      </div>
      <HorizontalOAuthButtonList>간편 로그인</HorizontalOAuthButtonList>
    </div>
  );
}
export default LoginForm;
