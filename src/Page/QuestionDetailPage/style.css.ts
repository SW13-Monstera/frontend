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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',

  width: '100%',
  height: '100%',

  fontFamily: vars.font.body,
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'start',
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
});

export const splitStyle = style({
  display: 'flex',
  width: '100%',
});

export const questionDescStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '40px',

  border: '1px solid #D9D9D9',
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
