import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import githubLogo from '../../../assets/images/github.png';
import googleLogo from '../../../assets/images/google.png';
import { oauthButtonListStyle } from './style.css';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton oAuth={OAUTH.GITHUB}>
        <img src={githubLogo} />
      </OAuthButton>
      <OAuthButton oAuth={OAUTH.GOOGLE}>
        <img src={googleLogo} />
      </OAuthButton>
    </div>
  );
}
export default OAuthButtonList;
