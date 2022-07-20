import { createThemeContract, createTheme, style, keyframes } from '@vanilla-extract/css';

export const vars = createThemeContract({
  backgroundColor: null,
  contentBackgroundColor: null,
  textColor: null,
});

export const themeLightClass = createTheme(vars, {
  backgroundColor: 'white',
  contentBackgroundColor: '#F5F5F5',
  textColor: 'black',
});

export const themeDarkClass = createTheme(vars, {
  backgroundColor: 'black',
  contentBackgroundColor: '#121212',
  textColor: 'white',
});

const spread = keyframes({
  '0%': { backgroundColor: 'inherit' },
  '100%': { backgroundColor: vars.backgroundColor },
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

  color: vars.textColor,
  backgroundColor: vars.backgroundColor,

  transition: 'background-color 0.2s',
  animation: `${spread}`,
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
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
  fontSize: '2.5rem',
  lineHeight: '3rem',
});

export const statisticsStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
});

export const questionContentStyle = style({
  display: 'flex',
  height: '50vh',
  background: vars.contentBackgroundColor,
  padding: ' 0 1.5rem 0 1.5rem',
  borderRadius: '10px',

  // selectors: {
  //   '& div': {
  //     background: 'red',
  //   },
  // },
});

export const splitStyle = style({
  display: 'flex',
  width: '100%',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2rem',

  padding: '1.5rem 0 1.5rem 0',
});

export const problemDescTitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.5rem',
  lineHeight: '1.8125rem',
});

export const problemDescContentStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
});

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  padding: '1.5rem 0 1.5rem 0',
});

export const answerInputTitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '29px',

  color: vars.textColor,
});

export const answerInputContentStyle = style({
  'height': '90%',
  'fontFamily': 'Inter',
  'fontStyle': 'normal',
  'fontWeight': '400',
  'fontSize': '20px',
  'lineHeight': '24px',

  'color': vars.textColor,
  'backgroundColor': vars.backgroundColor,

  'width': '100%',

  '::placeholder': {
    color: 'gray',
  },
});

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
