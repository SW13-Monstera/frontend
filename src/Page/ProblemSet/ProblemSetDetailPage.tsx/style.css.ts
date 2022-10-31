import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const problemSetDetailTitleStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  borderBottom: `1px solid ${themeColors.line.d}`,
  padding: '1.5rem',
});

export const contentWrapperStyle = style({
  display: 'flex',
  height: '100%',
  padding: '0 1rem',
});

export const indexButtonBaseStyle = style({
  width: '2rem',
  height: '2rem',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px 0 0 8px',
  color: themeColors.text[1],
});

export const indexButtonWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '2rem',
  height: '100%',
  borderRight: `1px solid ${themeColors.line.d}`,
});

export const indexButtonStyle = styleVariants({
  selected: [indexButtonBaseStyle, { backgroundColor: themeColors.line.d }],
  default: [indexButtonBaseStyle, { backgroundColor: COLOR.TRANSPARENT }],
});
