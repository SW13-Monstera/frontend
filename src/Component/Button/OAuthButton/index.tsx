import { BUTTON_TYPE, IButton } from '../../../types/button';
import { oauthButtonThemeStyle } from './style.css';

interface IOAuthButton extends IButton {
  oAuth: TOAuth;
}

export const OAUTH = { GITHUB: 'github', GOOGLE: 'google' } as const;

export type TOAuth = typeof OAUTH[keyof typeof OAUTH];

function OAuthButton({ oAuth, children }: IOAuthButton) {
  return (
    <button className={oauthButtonThemeStyle[oAuth]} type={BUTTON_TYPE.SUBMIT}>
      {children}
    </button>
  );
}

export default OAuthButton;
