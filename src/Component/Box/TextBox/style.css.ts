import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const textBoxStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  color: COLOR.TITLEACTIVE,
  backgroundColor: COLOR.OFFWHITE,
  borderRadius: '10px',

  width: '100%',
  height: '100%',
});
