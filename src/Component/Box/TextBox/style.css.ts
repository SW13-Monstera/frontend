import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const textBoxStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  color: themeColors.text[1],
  backgroundColor: themeColors.background.F3,
  borderRadius: '10px',

  width: '100%',
  height: '100%',
});
