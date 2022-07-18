import { style } from '@vanilla-extract/css';

export const transparentButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'fit-content',
  height: 'fit-content',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1rem',

  color: 'white',
  background: 'transparent',

  whiteSpace: 'nowrap',
});
