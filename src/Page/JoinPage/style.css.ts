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

export const inputListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',

  color: '#000000',
});

export const oauthJoinWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const oauthJoinStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',

  color: ' #D9D9D9',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.2rem',
  lineHeight: '19px',

  textAlign: 'center',
});

export const horizontalLineStyle = style({
  width: '238px',
  borderTop: 'solid 1px #D9D9D9',
});

export const oauthButtonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});
