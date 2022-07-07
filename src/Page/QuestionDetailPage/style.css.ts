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
  justifyContent: 'center',

  width: '100%',
  height: '100%',
  padding: '2.5rem',

  fontFamily: vars.font.body,
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',

  width: '100%',
  height: '70%',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
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
  position: 'relative',
  width: '90%',
  height: '90%',
  background: '#F5F5F5',
});

export const questionDescStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #D9D9D9',
});

export const answerInputStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const handlerStyle = style({
  position: 'relative',
  width: '24px',
  backgroundColor: 'black',
  cursor: 'ew-resize',
});
