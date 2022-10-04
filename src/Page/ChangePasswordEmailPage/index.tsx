import { useNavigate } from 'react-router-dom';
import { userApiWrapper } from '../../api/wrapper/user/userApiWrapper';
import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import { URL } from '../../constants/url';
import { useDarkModeStore } from '../../hooks/useStore';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { descStyle, logoTitleStyle, pageStyle } from './style.css';
import logo from '../../assets/images/csbroker-main.png';
import logoWhite from '../../assets/images/csbroker-white-main.png';
import { validateEmail } from '../../utils/validateEmail';

export function ChangePasswordEmailPage() {
  const navigate = useNavigate();
  const { isDark } = useDarkModeStore();

  function submitEmail() {
    const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
    if (!emailValue) return;
    if (!validateEmail(emailValue)) return;

    userApiWrapper.sendChangePasswordEmail(emailValue);
    navigate(URL.MAIN);
  }
  return (
    <>
      <Header />
      <div className={pageStyle}>
        <img src={isDark ? logoWhite : logo} className={logoTitleStyle}></img>
        <div className={descStyle}>
          <p>비밀번호를 잃어버리셨나요?</p>
          <p>CS Broker에 가입한 이메일을 정확히 입력해 주세요.</p>
          <p>이메일을 통해 비밀번호 수정 링크가 전송됩니다.</p>
        </div>
        <DefaultInputBox
          id='email'
          placeholder='이메일을 입력해주세요'
          name='email'
        ></DefaultInputBox>
        <TextButton
          type={BUTTON_TYPE.SUBMIT}
          theme={BUTTON_THEME.PRIMARY}
          size={BUTTON_SIZE.LARGE}
          onClick={submitEmail}
        >
          확인
        </TextButton>
      </div>
    </>
  );
}
