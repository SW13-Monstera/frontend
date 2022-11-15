import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sliderContainerStyle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '15rem',
  overflow: 'hidden',
  color: themeColors.background.F0,
  background: '#0F052C',
  marginTop: '0px',
  zIndex: 0,
  padding: '1rem 0',
});

export const sliderStyle = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-around',
  gap: '1rem',
  height: '15rem',
  padding: '2rem 5rem 3rem 5rem',
});

export const sliderLeftStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sliderRightStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sliderTransparentLayerStyle = style({
  position: 'relative',
  width: '100%',
  background: 'rgba(76, 175, 80, 0.3)',
});

export const sliderTransparentLayerCircleStyle = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'transparent',
  zIndex: 1,
  pointerEvents: 'none',
});

export const sliderImageStyle = style({
  width: '17rem',
  margin: '2rem',
  '@media': { 'screen and (max-width: 720px)': { display: 'none' } },
});

export const sliderItemDescriptionStyle = style({
  wordBreak: 'break-all',
});
