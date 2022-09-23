import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

const tagBaseStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.25rem',

  marginRight: '0.2rem',

  width: 'fit-content',
  height: '1.625rem',

  color: 'black',
  background: '#fff1cd',
  borderRadius: '16px',

  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.125rem',

  textAlign: 'center',

  padding: '.25rem .75rem',

  whiteSpace: 'nowrap',
});

export const tagColorStyle = styleVariants({
  color1: [tagBaseStyle, { backgroundColor: COLOR.BACKGROUND.PURPLE, color: COLOR.PURPLE }],
  color2: [tagBaseStyle, { backgroundColor: COLOR.BACKGROUND.PINK, color: COLOR.PINK }],
  color3: [tagBaseStyle, { backgroundColor: COLOR.BACKGROUND.ORANGE, color: COLOR.ORANGE }],
  color4: [tagBaseStyle, { backgroundColor: COLOR.BACKGROUND.GREEN, color: COLOR.GREEN }],
});

export const filterTagStyle = style({
  fontWeight: '500',
  fontSize: '.75rem',
  lineHeight: '1.125rem',
});

export const deleteButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
});

export const deleteButtonIsShownStyle = styleVariants({
  true: [deleteButtonStyle, {}],
  false: [deleteButtonStyle, { display: 'none' }],
});
