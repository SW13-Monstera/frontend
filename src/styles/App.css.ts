import { themeColors } from './theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const spread = keyframes({
  '0%': { backgroundColor: 'inherit' },
  '100%': { backgroundColor: themeColors.background.FF },
});

export const appStyle = style({
  boxSizing: 'border-box',
  height: '100%',
  backgroundColor: themeColors.background.FF,
  color: themeColors.text[1],
  transition: 'background-color 0.2s',
  animation: spread,
});
