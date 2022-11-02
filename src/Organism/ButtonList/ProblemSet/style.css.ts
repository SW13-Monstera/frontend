import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonListWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${themeColors.line.d}`,
  padding: '1rem',
});
