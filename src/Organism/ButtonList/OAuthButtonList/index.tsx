import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import githubLogo from '../../../assets/icons/github.svg';
import googleLogo from '../../../assets/icons/google.svg';
import { oauthButtonListStyle, oAuthGithubImgStyle, oAuthGoogleImgStyle } from './style.css';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton oAuth={OAUTH.GITHUB}>
        <img src={githubLogo} alt='github logo' className={oAuthGithubImgStyle} />
      </OAuthButton>
      <OAuthButton oAuth={OAUTH.GOOGLE}>
        <img src={googleLogo} alt='google logo' className={oAuthGoogleImgStyle} />
      </OAuthButton>
    </div>
  );
}
export default OAuthButtonList;
