import { MouseEvent } from 'react';
import { DefaultInputBox } from '../../Component/Box';
import { loginFormContentStyle, loginFormStyle } from './style.css';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import HorizontalOAuthButtonList from '../ButtonList/HorizontalOAuthButtonList';
import { INPUT_TYPE } from '../../constants/input';
import { useNavigate } from 'react-router-dom';

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
        <label htmlFor='email'>이메일</label>
        <DefaultInputBox
          id='email'
          name='email'
          placeholder='이메일을 입력해주세요'
          type={INPUT_TYPE.EMAIL}
        />
        <label htmlFor='pw'>비밀번호</label>
        <DefaultInputBox
          id='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          type={INPUT_TYPE.PASSWORD}
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
      <HorizontalOAuthButtonList>간편 로그인</HorizontalOAuthButtonList>
    </div>
  );
}
export default LoginForm;
