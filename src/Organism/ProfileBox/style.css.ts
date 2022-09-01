import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const boxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: COLOR.OFFWHITE,

  width: '32rem',
  height: 'fit-content',

  borderRadius: '20px',
});

export const imageWrapperStyle = style({
  width: '100px',
  height: '100px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
});

export const imageStyle = style({
  display: 'inline',
  margin: '0 auto',
  height: '100%',
  width: 'auto',
});
