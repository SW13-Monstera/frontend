import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../../styles/theme.css';

export const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
});

export const titleStyle = style({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.25rem',
});

export const textareaWrapStyle = style({
  marginTop: '1rem',
  padding: '1.2rem',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '4px',
});

export const textareaStyle = style({
  width: '100%',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
});

export const buttonStyle = style({
  alignSelf: 'end',
  marginTop: '0.5rem',
});
