import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import { oauthButtonListStyle } from './style.css';
import { GithubIcon } from '../../../Icon/GithubIcon';
import { ReactComponent as GoogleIcon } from '../../../assets/icons/google.svg';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton
        oAuth={OAUTH.GITHUB}
        icon={<GithubIcon width='1.5rem' height='1.5rem' />}
        text='깃허브로 로그인'
      />
      <OAuthButton oAuth={OAUTH.GOOGLE} icon={<GoogleIcon />} text='구글로 로그인' />
    </div>
  );
}
export default OAuthButtonList;
