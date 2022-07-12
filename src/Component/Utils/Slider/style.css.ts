import { style } from '@vanilla-extract/css';

export const sliderContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '300px',
  width: '100%',
  height: '30vh',
  margin: 'auto',
  overflow: 'hidden',
  color: '#ffffff',
  backgroundColor: '#000000',
});

export const slideStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
