import { DefaultInputBox } from '../../Component/Box';
import { ReactComponent as Logo } from '../../assets/images/csbroker.svg';
import { loginFormContentStyle, loginFormStyle } from './style.css';
import { TextButton } from '../../Component/Button';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import HorizontalOAuthButtonList from '../ButtonList/HorizontalOAuthButtonList';
import { useAuthStore } from '../../hooks/useStore';

interface ILoginForm {
  closeModal: () => void;
}

function LoginForm({ closeModal }: ILoginForm) {
  const { setIsLogin } = useAuthStore();

  function fakeLogIn() {
    setIsLogin();
    closeModal();
  }
  return (
    <div className={loginFormStyle}>
      <Logo />
      <div className={loginFormContentStyle}>
        <label htmlFor='id'></label>
        <DefaultInputBox id='id' placeholder='아이디를 입력해주세요' />
        <label htmlFor='pw'></label>
        <DefaultInputBox id='pw' placeholder='비밀번호를 입력해주세요' />
      </div>
      <TextButton
        theme={BUTTON_THEME.PRIMARY}
        size={BUTTON_SIZE.LARGE}
        type={BUTTON_TYPE.SUBMIT}
        onClick={fakeLogIn}
      >
        로그인
      </TextButton>
      <HorizontalOAuthButtonList>간편 로그인</HorizontalOAuthButtonList>
    </div>
  );
}
export default LoginForm;