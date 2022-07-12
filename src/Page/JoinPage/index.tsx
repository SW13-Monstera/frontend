import DefaultInputBox from '../../Component/Box/InputBox/DefaultInputBox';
import OAuthButton, { OAUTH } from '../../Component/Button/OAuthButton';
import TextButton from '../../Component/Button/TextButton';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import {
  horizontalLineStyle,
  inputListStyle,
  oauthButtonListStyle,
  oauthJoinStyle,
  oauthJoinWrapperStyle,
  pageStyle,
  titleStyle,
} from './style.css';

import githubLogo from '../../assets/images/github.png';
import googleLogo from '../../assets/images/google.png';

function JoinPage() {
  return (
    <>
      <Header />
      <div className={pageStyle}>
        <h1 className={titleStyle}>회원가입</h1>
        <div className={inputListStyle}>
          <label htmlFor='email'>이메일</label>
          <DefaultInputBox id='email' placeholder='이메일을 입력해주세요'></DefaultInputBox>
          <label htmlFor='password'>비밀번호</label>
          <DefaultInputBox id='password' placeholder='비밀번호를 입력해주세요'></DefaultInputBox>
          <label htmlFor='password-confirm'>비밀번호 확인</label>
          <DefaultInputBox
            id='password-confirm'
            placeholder='비밀번호를 다시 한번 입력해주세요'
          ></DefaultInputBox>
          <label htmlFor='nickname'>닉네임</label>
          <DefaultInputBox id='nickname' placeholder='닉네임을 입력해주세요'></DefaultInputBox>
        </div>

        <TextButton type={BUTTON_TYPE.SUBMIT} theme={BUTTON_THEME.PRIMARY} size={BUTTON_SIZE.LARGE}>
          회원가입
        </TextButton>
        <div className={oauthJoinWrapperStyle}>
          <div className={oauthJoinStyle}>
            <div className={horizontalLineStyle} />
            <p>간편 회원가입</p>
            <div className={horizontalLineStyle} />
          </div>
          <div className={oauthButtonListStyle}>
            <OAuthButton oAuth={OAUTH.GITHUB} type={BUTTON_TYPE.SUBMIT}>
              <img src={githubLogo} />
            </OAuthButton>
            <OAuthButton oAuth={OAUTH.GOOGLE} type={BUTTON_TYPE.SUBMIT}>
              <img src={googleLogo} />
            </OAuthButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default JoinPage;
