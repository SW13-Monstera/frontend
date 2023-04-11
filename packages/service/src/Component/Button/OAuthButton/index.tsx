import { BUTTON_TYPE } from '../../../types/button';
import { oauthButtonThemeStyle, oauthIconStyle } from './style.css';
import { API_BASE_URL, APP_URL } from '../../../constants/api';

interface IOAuthButton {
  oAuth: TOAuth;
  icon: React.ReactNode;
  text: string;
}

export const OAUTH = { GITHUB: 'github', GOOGLE: 'google' } as const;

export type TOAuth = typeof OAUTH[keyof typeof OAUTH];

function OAuthButton({ oAuth, icon, text }: IOAuthButton) {
  const REDIRECT_URL = `${API_BASE_URL}/oauth2/authorization/${oAuth}?redirect_uri=${APP_URL}/oauth/redirect`;
  return (
    <a href={REDIRECT_URL}>
      <button className={oauthButtonThemeStyle[oAuth]} type={BUTTON_TYPE.SUBMIT}>
        <p className={oauthIconStyle}>{icon}</p>
        <p>{text}</p>
      </button>
    </a>
  );
}

export default OAuthButton;
