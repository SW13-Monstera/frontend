import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const textBoxStyle = style({
  color: themeColors.text[1],
  backgroundColor: themeColors.background.F3,
  borderRadius: '8px',

  width: '100%',
  height: '100%',

  overflow: 'auto',
});
