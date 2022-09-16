import { themeColors } from './../../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const searchInputBoxStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '10px',
  padding: '12px',

  width: '100%',
  height: '3rem',

  color: themeColors.text[1],
  backgroundColor: themeColors.background.FF,
  boxShadow: `0 0 8px ${themeColors.shadow}`,
  borderRadius: '8px',
});

export const inputTextBoxStyle = style({
  width: '100%',
  border: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: themeColors.text[1],
  backgroundColor: 'inherit',
});
