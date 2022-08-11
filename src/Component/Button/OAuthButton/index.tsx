import { BUTTON_TYPE, IButton } from '../../../types/button';
import { oauthButtonThemeStyle } from './style.css';

interface IOAuthButton extends IButton {
  oAuth: TOAuth;
}

export const OAUTH = { GITHUB: 'github', GOOGLE: 'google' } as const;

export type TOAuth = typeof OAUTH[keyof typeof OAUTH];

function OAuthButton({ oAuth, children }: IOAuthButton) {
  const REDIRECT_URL = `${
    import.meta.env.VITE_API_BASE_URL
  }/oauth2/authorization/${oAuth}?redirect_uri=${import.meta.env.VITE_APP_URL}/oauth/redirect`;

  return (
    <a href={REDIRECT_URL}>
      <button className={oauthButtonThemeStyle[oAuth]} type={BUTTON_TYPE.SUBMIT}>
        {children}
      </button>
    </a>
  );
}

export default OAuthButton;
