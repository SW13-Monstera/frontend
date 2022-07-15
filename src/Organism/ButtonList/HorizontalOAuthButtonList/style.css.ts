import { style } from '@vanilla-extract/css';

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
