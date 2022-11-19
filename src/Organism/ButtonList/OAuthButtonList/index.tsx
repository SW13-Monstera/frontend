import OAuthButton, { OAUTH } from '../../../Component/Button/OAuthButton';
import { oauthButtonListStyle } from './style.css';
import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/icons/google.svg';

function OAuthButtonList() {
  return (
    <div className={oauthButtonListStyle}>
      <OAuthButton
        oAuth={OAUTH.GITHUB}
        icon={<GithubIcon width='25px' height='30px' />}
        text='깃허브로 로그인'
      />
      <OAuthButton
        oAuth={OAUTH.GOOGLE}
        icon={<GoogleIcon width='20px' height='20px' />}
        text='구글로 로그인'
      />
    </div>
  );
}
export default OAuthButtonList;
