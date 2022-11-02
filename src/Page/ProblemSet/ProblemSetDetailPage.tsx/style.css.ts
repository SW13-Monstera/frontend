import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const problemSetDetailTitleStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  borderBottom: `1px solid ${themeColors.line.d}`,
  padding: '1.5rem',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});

export const problemSetTitleStyle = style({
  fontWeight: '700',
  fontSize: '2.25rem',
  lineHeight: '1.75rem',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flex: 1,
  padding: '0 0 0 1rem',
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
  flex: 1,
  gap: '.5rem',
  width: '2rem',
  borderRight: `1px solid ${themeColors.line.d}`,
});

export const indexButtonStyle = styleVariants({
  selected: [indexButtonBaseStyle, { backgroundColor: themeColors.line.d }],
  default: [indexButtonBaseStyle, { backgroundColor: COLOR.TRANSPARENT }],
});

export const problemDetailWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
