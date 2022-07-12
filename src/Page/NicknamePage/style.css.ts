import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '30px',

  boxSizing: 'border-box',
  width: '100vw',
  height: '100vh',
  padding: '70px',
});

export const titleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '39px',

  textAlign: 'center',

  color: '#000000',
});

export const descStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  textAlign: 'center',

  color: '#000000',
});
