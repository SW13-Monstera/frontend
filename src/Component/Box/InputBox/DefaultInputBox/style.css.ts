import { themeColors } from './../../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../../constants/color';

export const defaultInputWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',
  height: 'fit-content',
  minHeight: '4.9375rem',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: themeColors.text[5],
});

export const defaultInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  color: themeColors.text[5],
});

export const defaultInputBoxStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  width: '100%',
  height: '3rem',

  font: 'inherit',
  color: 'inherit',
  background: themeColors.background.F8,
  borderRadius: '8px',
});

export const defaultInputIconStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 0 0 1rem',
  zIndex: 1,
});

export const defaultInputTagStyle = style({
  position: 'absolute',
  padding: '0 3rem',
  width: '100%',
  height: '100%',
  background: themeColors.background.F8,
  borderRadius: '8px',
  verticalAlign: 'middle',

  ':focus': {
    border: COLOR.PRIMARY,
    background: themeColors.background.FF,
    filter: `drop-shadow(0px 2px 8px ${themeColors.shadow[1]})`,
  },
  '::placeholder': {
    color: COLOR.TEXT[9],
  },
});

export const warningStyle = style({
  color: COLOR.RED,
});
