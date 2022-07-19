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
  fontSize: '1.5rem',
  lineHeight: '1.8125rem',
  /* identical to box height */

  color: '#000000',
});

export const answerInputContentStyle = style({
  height: '90%',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',

  color: '#000000',

  width: '100%',
});
