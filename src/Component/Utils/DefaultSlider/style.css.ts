import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const sliderContainerStyle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '30vh',
  overflow: 'hidden',
  color: themeColors.background.F0,
  background: '#21185B',
  marginTop: '0px',
  zIndex: 0,
});

export const slideStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3rem',
});

export const sliderTransparentLayerStyle = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  background: 'rgba(76, 175, 80, 0.3)',
});

export const circleBaseStyle = style({
  position: 'absolute',
  width: '100px',
  height: '100px',
  zIndex: 1,
});

export const circleStyle = styleVariants({
  1: [circleBaseStyle, { top: '-45px', left: '10%' }],
  2: [circleBaseStyle, { top: '20%', left: '50%' }],
  3: [circleBaseStyle, { top: '40%', left: '60%' }],
});

export const sliderImageStyle = style({
  position: 'absolute',
  width: '300px',
  top: '2rem',
  left: '650px',
});
