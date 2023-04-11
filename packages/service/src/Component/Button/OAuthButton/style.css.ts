import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { TOAuth } from '.';
import { COLOR } from '../../../constants/color';

export const oauthButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  padding: '0.75rem 1.5rem',

  width: '31.5rem',
  height: '3rem',

  borderRadius: '8px',

  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  border: `1px solid ${themeColors.line.e}`,
});

export const oauthButtonThemeStyle: Record<TOAuth, string> = styleVariants({
  github: [oauthButtonStyle, { backgroundColor: COLOR.TITLEACTIVE, color: COLOR.WHITE }],
  google: [
    oauthButtonStyle,
    {
      backgroundColor: COLOR.BACKGROUND.F8,
      color: COLOR.TEXT[5],
    },
  ],
});

export const oauthIconStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
});
