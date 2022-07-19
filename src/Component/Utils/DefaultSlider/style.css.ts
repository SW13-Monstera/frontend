import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const sliderContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '30vh',
  margin: 'auto',
  overflow: 'hidden',
  color: COLOR.WHITE,
  backgroundColor: COLOR.TITLEACTIVE,
});

export const slideStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
