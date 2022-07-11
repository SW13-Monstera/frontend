import { style } from '@vanilla-extract/css';

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '40px',
});

export const answerInputTitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '29px',
  /* identical to box height */

  color: '#000000',
});

export const answerInputContentStyle = style({
  height: '90%',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',

  color: '#000000',

  width: '100%',
});
