import { DefaultInputBox } from '../../Component/Box';
import { loginFormContentStyle, loginFormStyle, logoStyle } from './style.css';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import HorizontalOAuthButtonList from '../ButtonList/HorizontalOAuthButtonList';
import CSBroker from '../../assets/images/csbroker.png';
import { INPUT_TYPE } from '../../constants/input';

interface ILoginForm {
  closeModal: () => void;
  handleSubmit: (event: any) => void;
}

function LoginForm({ closeModal, handleSubmit }: ILoginForm) {
  function handleLogin(event: any) {
    closeModal();
    handleSubmit(event);
  }

  return (
    <div className={loginFormStyle}>
      <img src={CSBroker} alt='logo' className={logoStyle} />
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
