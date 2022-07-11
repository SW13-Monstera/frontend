import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'Inter',
  },
});

export const pageStyle = style({
  boxSizing: 'border-box',
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',

  width: '100%',
  fontFamily: vars.font.body,
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
  height: '10vh',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const titleTagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const titleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '48px',
});

export const statisticsStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',
});

export const questionContentStyle = style({
  display: 'flex',
  width: '100%',
  height: '70vh',
  background: '#F5F5F5',

  padding: '2rem',
});

export const splitStyle = style({
  display: 'flex',
  width: '100%',
});

export const questionDescStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '40px',

  padding: '2rem',
});

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const problemDescTitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '29px',
  /* identical to box height */

  color: '#000000',
});

export const problemDescContentStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',

  color: '#000000',
});

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
