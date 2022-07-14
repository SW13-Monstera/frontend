import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import { BUTTON_TYPE } from '../../../types/button';
import githubLogo from '../../../assets/images/github.png';
import googleLogo from '../../../assets/images/google.png';
import { oauthButtonListStyle } from './style.css';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton oAuth={OAUTH.GITHUB} type={BUTTON_TYPE.SUBMIT}>
        <img src={githubLogo} />
      </OAuthButton>
      <OAuthButton oAuth={OAUTH.GOOGLE} type={BUTTON_TYPE.SUBMIT}>
        <img src={googleLogo} />
      </OAuthButton>
    </div>
  );
}
export default OAuthButtonList;
