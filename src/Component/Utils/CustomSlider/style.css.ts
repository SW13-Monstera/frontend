import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const containerStyle = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: COLOR.TITLEACTIVE,
  color: COLOR.BACKGROUND.F3,
});

export const windowStyle = style({
  position: 'relative',
  width: '100%',
  height: '15rem',
  overflow: 'hidden',
});

export const flexBoxStyle = style({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const imageStyle = style({
  width: '100%',
  height: '100%',
  backgroundPosition: '50% 50%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  flex: 'none',
});

export const sliderStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '1rem',
  height: '15rem',
  padding: '2rem 5rem 3rem 5rem',
});

export const sliderLeftStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.3rem',
});

export const sliderRightStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sliderItemCategoryStyle = style({
  fontWeight: '400',
  fontSize: '.75rem',
  lineHeight: '1.25rem',
  color: COLOR.GRAY,
  width: 'fit-content',
  padding: '.3rem',
  borderRadius: '8px',
  backgroundColor: 'rgb(145, 145, 145, 0.3)',
});

export const sliderItemDescriptionStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',
  color: COLOR.GRAY,
});

export const buttonListStyle = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',
  right: '3rem',
  bottom: '1rem',
  zIndex: 1,
  color: COLOR.GRAY,
});

export const buttonStyle = style({
  color: COLOR.GRAY,
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
  margin: '2rem',
  '@media': { 'screen and (max-width: 720px)': { display: 'none' } },
});
