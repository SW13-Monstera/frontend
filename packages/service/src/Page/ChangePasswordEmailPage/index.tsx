import { useNavigate } from 'react-router-dom';
import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import { URL } from '../../constants/url';
import { useDarkModeStore } from '../../hooks/useStore';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { contentWrapperStyle, descStyle, logoTitleStyle, pageStyle } from './style.css';
import logo from '../../assets/images/csbroker-main.png';
import logoWhite from '../../assets/images/csbroker-white-main.png';
import { validateEmail } from '../../utils/validate';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { MailIcon } from '../../Icon/MailIcon';
import { themeColors } from '../../styles/theme.css';
import { toast } from 'react-toastify';

export function ChangePasswordEmailPage() {
  const navigate = useNavigate();
  const { isDark } = useDarkModeStore();

  function submitEmail() {
    const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
    if (!emailValue || !validateEmail(emailValue)) {
      toast.error('올바른 이메일을 입력해주세요');
      return;
    }

    authApiWrapper
      .sendChangePasswordEmail(emailValue)
      .then(() => {
        toast('비밀번호 변경 메일이 발송되었어요!');
        navigate(URL.MAIN);
      })
      .catch(() => {
        toast.error('다시 시도해주세요.');
      });
  }
  return (
    <>
      <div className={pageStyle}>
        <div className={contentWrapperStyle}>
          <img src={isDark ? logoWhite : logo} className={logoTitleStyle}></img>
          <div className={descStyle}>
            <p>비밀번호를 잃어버리셨나요?</p>
            <p>CS Broker에 가입한 이메일을 정확히 입력해 주세요.</p>
            <p>이메일을 통해 비밀번호 변경 링크가 전송됩니다.</p>
          </div>
          <DefaultInputBox
            id='email'
            placeholder='이메일을 입력해주세요'
            name='email'
            label=''
            icon={<MailIcon width='1.25rem' height='1rem' fill={themeColors.text[3]} />}
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
      </div>
    </>
  );
}
