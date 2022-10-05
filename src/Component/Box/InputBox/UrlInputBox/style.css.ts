import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../styles/theme.css';

export const urlInputWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',
});

export const urlWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  width: '100%',
  padding: '1rem',
});

export const urlPrefixStyle = style({
  color: themeColors.text[9],
  cursor: 'default',
});

export const urlInputStyle = style({
  width: '100%',
  height: '3rem',
  backgroundColor: themeColors.background.F8,
  color: themeColors.text[5],
  borderRadius: '8px',
  paddingLeft: '.7rem',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.4375rem',
});
