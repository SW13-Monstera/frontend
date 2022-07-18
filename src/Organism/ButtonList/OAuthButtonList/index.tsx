import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import githubLogo from '../../../assets/images/github.png';
import googleLogo from '../../../assets/images/google.png';
import { oauthButtonListStyle, oAuthImgStyle } from './style.css';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton oAuth={OAUTH.GITHUB}>
        <img src={githubLogo} className={oAuthImgStyle} />
      </OAuthButton>
      <OAuthButton oAuth={OAUTH.GOOGLE}>
        <img src={googleLogo} className={oAuthImgStyle} />
      </OAuthButton>
    </div>
  );
}
export default OAuthButtonList;
