import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import { themeColors } from '../../../styles/theme.css';

export const indexButtonWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '2rem',
  height: '100%',
  borderRight: `1px solid ${themeColors.line.d}`,
});

export const indexButtonBaseStyle = style({
  width: '2rem',
  height: '2rem',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px 0 0 8px',
  color: themeColors.text[1],
});

export const indexButtonStyle = styleVariants({
  selected: [indexButtonBaseStyle, { backgroundColor: themeColors.line.d }],
  default: [indexButtonBaseStyle, { backgroundColor: COLOR.TRANSPARENT }],
});
