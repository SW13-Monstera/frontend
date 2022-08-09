import { githubOAuthApiWrapper } from '../../../api/oauth/githubOAuthApiWrapper';
import { BUTTON_TYPE, IButton } from '../../../types/button';
import { oauthButtonThemeStyle } from './style.css';

interface IOAuthButton extends IButton {
  oAuth: TOAuth;
}

export const OAUTH = { GITHUB: 'github', GOOGLE: 'google' } as const;

export type TOAuth = typeof OAUTH[keyof typeof OAUTH];

const VITE_GITHUB_CLIENT_ID = '';

function OAuthButton({ oAuth, children }: IOAuthButton) {
  function loginGithubOAuth() {
    const code = githubOAuthApiWrapper.githubLogin();
    console.log(code);
  }
  return (
    <button
      className={oauthButtonThemeStyle[oAuth]}
      type={BUTTON_TYPE.SUBMIT}
      onClick={loginGithubOAuth}
    >
      {children}
    </button>
  );
}

export default OAuthButton;
