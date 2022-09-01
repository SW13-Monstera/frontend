import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const pageWrapperStyle = style({
  display: 'flex',

  padding: '3rem',
});

export const rightSideWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  marginLeft: '3rem',
});

export const colorLabelListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',

  alignSelf: 'end',
});
