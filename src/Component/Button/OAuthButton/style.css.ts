import { style, styleVariants } from '@vanilla-extract/css';
import { TOAuth } from '.';

export const oauthButtonStyle = style({
  width: '60px',
  height: '60px',

  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '15px',
});

export const oauthButtonThemeStyle: Record<TOAuth, string> = styleVariants({
  github: [oauthButtonStyle, { backgroundColor: '#000000' }],
  google: [oauthButtonStyle, { backgroundColor: '#F8F8F8' }],
});