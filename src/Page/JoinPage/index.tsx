import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import TextButton from '../../Component/Button/TextButton';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { inputListStyle, linkStyle, noticeStyle, pageStyle, titleStyle } from './style.css';
import { INPUT_TYPE } from '../../constants/input';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { IJoinRequest } from '../../types/auth';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from '../../constants/url';
import { MouseEvent, useMemo, useState } from 'react';
import {
  validateEmail,
  validatePasswordContinuity,
  validatePasswordElements,
  validatePasswordLength,
} from '../../utils/validate';
import { PageTemplate } from '../../Template';
import { MetaTag } from '../utils/MetaTag';
import { MailIcon } from '../../Icon/MailIcon';
import { themeColors } from '../../styles/theme.css';
import { LockIcon } from '../../Icon/LockIcon';
import { SmileIcon } from '../../Icon/SmileIcon';
import OAuthButtonListSection from '../../Organism/ButtonList/OAuthButtonListSection';
import { usePasswordConfirm } from '../../hooks/usePasswordConfirm';

function JoinPage() {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const { passwordValue, setPasswordValue, setPasswordConfirmValue, isPasswordSame } =
    usePasswordConfirm();
  const isEmailValidate = useMemo(() => validateEmail(emailValue), [emailValue]);
  const isPasswordElementsValidate = useMemo(
    () => validatePasswordElements(passwordValue),
    [passwordValue],
  );
  const isPasswordLengthValidate = useMemo(
    () => validatePasswordLength(passwordValue),
    [passwordValue],
  );
  const isPasswordContinuityValidate = useMemo(
    () => validatePasswordContinuity(passwordValue),
    [passwordValue],
  );

  function handleJoin(event: MouseEvent) {
    event.preventDefault();

    const data: IJoinRequest = {
      email: emailValue,
      password: passwordValue,
      username: nicknameValue,
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
              isWarning={emailValue.length <= 0 || !isEmailValidate}
              warningMessages={[
                { text: '이메일은 필수 항목입니다.', isWarning: emailValue.length <= 0 },
                { text: '이메일 형식이 올바르지 않습니다.', isWarning: !isEmailValidate },
              ]}
              icon={<MailIcon width='1.25rem' height='1rem' fill={themeColors.text[3]} />}
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
            />
            <DefaultInputBox
              id='password'
              placeholder='비밀번호를 입력해주세요'
              type={INPUT_TYPE.PASSWORD}
              name='password'
              label='비밀번호'
              onChange={(event) => {
                setPasswordValue(event.target.value);
              }}
              isWarning={
                !isPasswordElementsValidate ||
                !isPasswordLengthValidate ||
                !isPasswordContinuityValidate
              }
              warningMessages={[
                {
                  text: '영문/숫자/특수문자 각각 한 개 이상 포함',
                  isWarning: !isPasswordElementsValidate,
                },
                {
                  text: '8자 이상 32자 이하 입력',
                  isWarning: !isPasswordLengthValidate,
                },
                {
                  text: '연속 3자 이상 동일한 문자/숫자 제외',
                  isWarning: !isPasswordContinuityValidate,
                },
              ]}
              icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
            />
            <DefaultInputBox
              id='password-confirm'
              placeholder='비밀번호를 다시 한번 입력해주세요'
              type={INPUT_TYPE.PASSWORD}
              name='password-confirm'
              label='비밀번호 확인'
              onChange={(event) => {
                setPasswordConfirmValue(event.target.value);
              }}
              isWarning={!isPasswordSame}
              warningMessages={[
                { text: '비밀번호가 일치하지 않습니다.', isWarning: !isPasswordSame },
              ]}
              icon={<LockIcon width='1.25rem' height='1.3125rem' fill={themeColors.text[3]} />}
            />
            <DefaultInputBox
              id='nickname'
              placeholder='닉네임을 입력해주세요'
              name='nickname'
              label='닉네임'
              isWarning={nicknameValue.length <= 0}
              warningMessages={[
                { text: '닉네임은 필수 항목입니다.', isWarning: nicknameValue.length <= 0 },
              ]}
              onChange={(event) => {
                setNicknameValue(event.target.value);
              }}
              icon={<SmileIcon width='1.25rem' height='1.25rem' fill={themeColors.text[3]} />}
            ></DefaultInputBox>
            <p className={noticeStyle}>
              회원가입시{' '}
              <Link to={URL.TERMS_OF_SERVICE} className={linkStyle}>
                이용약관
              </Link>{' '}
              및{' '}
              <Link to={URL.PRIVACY_POLICY} className={linkStyle}>
                개인정보처리방침
              </Link>
              에 동의하는 것으로 간주합니다.
            </p>
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.LARGE}
              onClick={handleJoin}
              isActivated={
                validateEmail(emailValue) &&
                isPasswordElementsValidate &&
                isPasswordLengthValidate &&
                isPasswordContinuityValidate &&
                isPasswordSame &&
                nicknameValue.length > 0
              }
            >
              회원가입
            </TextButton>
            <OAuthButtonListSection>간편 회원가입</OAuthButtonListSection>
          </form>
        </div>
      </PageTemplate>
    </>
  );
}
export default JoinPage;
