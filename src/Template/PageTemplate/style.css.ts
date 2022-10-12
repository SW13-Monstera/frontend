import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: 'auto',
  minHeight: 'calc(100vh - 11.5rem - 5rem)',

  backgroundColor: themeColors.background.FF,

  flex: 1,
});
