import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '32px',

  padding: '40px 110px 40px 110px',
});

export const pageContentStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  alignSelf: 'center',
  width: '100%',
});

export const myAnswerContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '24px',

  width: '37vw',
  height: '40vh',
  padding: '56px',
});

export const subtitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '36px',
  lineHeight: '44px',
  display: 'flex',
  alignItems: 'center',

  color: '#000000',
});

export const textStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',

  color: '#000000',
});

export const keywordListStyle = style({
  display: 'flex',
  gap: '15px',
});

export const providedAnswerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '24px',

  width: '37vw',
  height: '40vh',
  padding: '56px',
});

export const buttonListStyle = style({
  display: 'flex',
  alignSelf: 'flex-end',
  gap: '1rem',
});
