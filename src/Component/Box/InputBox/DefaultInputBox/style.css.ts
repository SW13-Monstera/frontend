import { themeColors } from './../../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../../constants/color';

export const defaultInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',
  height: '4.9375rem',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: themeColors.text[5],
});

export const defaultInputBoxStyle = style({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '3rem',

  font: 'inherit',
  color: 'inherit',
  background: themeColors.background.F8,
  borderRadius: '8px',

  padding: '0 1rem',

  '::placeholder': {
    color: COLOR.TEXT[9],
  },
});

export const warningStyle = style({
  color: COLOR.RED,
});
