import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../../styles/theme.css';

export const wrapStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '1rem',
});

export const textareaWrapStyle = style({
  flex: 1,
  padding: '0.5rem',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '4px',
});

export const textareaStyle = style({
  width: '100%',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
});
