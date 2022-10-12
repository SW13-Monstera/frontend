import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const loginFormStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const logoStyle = style({
  width: '20rem',
});

export const loginFormContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const etcStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  color: themeColors.text[3],
});

export const etcButtonStyle = style({
  color: 'inherit',
  backgroundColor: COLOR.TRANSPARENT,
  lineHeight: '1.38',
  letterSpacing: '-.3px',
  fontSize: '.8125rem',
  fontWeight: '400',
  textDecoration: 'underline',
  ':hover': {
    filter: 'brightness(90%)',
  },
});
