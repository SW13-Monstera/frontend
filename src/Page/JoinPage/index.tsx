import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { inputListStyle, pageStyle, titleStyle } from './style.css';
import HorizontalOAuthButtonList from '../../Organism/ButtonList/HorizontalOAuthButtonList';
import { INPUT_TYPE } from '../../constants/input';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { IJoinRequest } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { toast } from 'react-toastify';
import { MouseEvent } from 'react';
import { validateEmail } from '../../utils/validateEmail';
import { PageTemplate } from '../../Template';
import { MetaTag } from '../utils/MetaTag';
import { MailIcon } from '../../Icon/MailIcon';
import { themeColors } from '../../styles/theme.css';
import { LockIcon } from '../../Icon/LockIcon';
import { SmileIcon } from '../../Icon/SmileIcon';

function JoinPage() {
  const navigate = useNavigate();

  function handleJoin(event: MouseEvent) {
    event.preventDefault();

    const joinForm = document.getElementById('join-form') as HTMLFormElement;
    const formData = new FormData(joinForm);

    const emailValue = formData.get('email')?.toString();
    const passwordValue = formData.get('password')?.toString();
    const passwordComfirmValue = formData.get('password-confirm')?.toString();
    const usernameValue = formData.get('nickname')?.toString();

    if (!emailValue) {
      toast('이메일은 필수항목입니다.');
      return;
    }
    if (!validateEmail(emailValue)) {
      toast('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!passwordValue) {
      toast('비밀번호는 필수항목입니다.');
      return;
    }
    if (passwordValue !== passwordComfirmValue) {
      toast('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!usernameValue) {
      toast('닉네임은 필수항목입니다.');
      return;
    }

    const data: IJoinRequest = {
      email: emailValue,
      password: passwordValue,
      username: usernameValue,
    };

    authApiWrapper.join(data);
    navigate(URL.MAIN);
  }

  return (
    <>
      <MetaTag title='CS Broker - 회원가입' />
      <PageTemplate>
        <div className={pageStyle}>
          <h1 className={titleStyle}>회원가입</h1>
          <form className={inputListStyle} id='join-form'>
            <DefaultInputBox
              id='email'
              placeholder='이메일을 입력해주세요'
              type={INPUT_TYPE.EMAIL}
              name='email'
              label='이메일'
              warningMessage='이메일은 필수 항목입니다.'
              icon={<MailIcon width='1.25rem' height='1rem' fill={themeColors.text[3]} />}
            />
            <DefaultInputBox
              id='password'
              placeholder='비밀번호를 입력해주세요'
              type={INPUT_TYPE.PASSWORD}
              name='password'
              label='비밀번호'
              warningMessage='비밀번호는 필수 항목입니다.'
              icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
            />
            <DefaultInputBox
              id='password-confirm'
              placeholder='비밀번호를 다시 한번 입력해주세요'
              type={INPUT_TYPE.PASSWORD}
              name='password-confirm'
              label='비밀번호 확인'
              warningMessage='비밀번호가 일치하지 않습니다.'
              icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
            />
            <DefaultInputBox
              id='nickname'
              placeholder='닉네임을 입력해주세요'
              name='nickname'
              label='닉네임'
              icon={<SmileIcon width='1.25rem' height='1.25rem' fill={themeColors.text[3]} />}
            ></DefaultInputBox>
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.LARGE}
              onClick={handleJoin}
            >
              회원가입
            </TextButton>
            <HorizontalOAuthButtonList>간편 회원가입</HorizontalOAuthButtonList>
          </form>
        </div>
      </PageTemplate>
    </>
  );
}
export default JoinPage;
