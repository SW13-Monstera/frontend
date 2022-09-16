import { themeColors } from './theme.css';
import { style } from '@vanilla-extract/css';

export const appStyle = style({
  boxSizing: 'border-box',
  height: '100vh',
  backgroundColor: themeColors.background.FF,
  color: themeColors.text[1],
});
