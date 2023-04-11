import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.875rem',

  padding: '4rem 0',
});

export const titleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '1.125rem',
  textAlign: 'center',
  color: themeColors.text[1],
});
