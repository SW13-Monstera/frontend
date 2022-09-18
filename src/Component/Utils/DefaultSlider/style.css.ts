import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sliderContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '30vh',
  overflow: 'hidden',
  color: themeColors.text[1],
  backgroundColor: themeColors.background.F0,
  marginTop: '0px',
  zIndex: 0,
});

export const slideStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
