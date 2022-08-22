import { createThemeContract, createTheme, style, keyframes } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const vars = createThemeContract({
  backgroundColor: null,
  contentBackgroundColor: null,
  textColor: null,
});

export const themeLightClass = createTheme(vars, {
  backgroundColor: COLOR.WHITE,
  contentBackgroundColor: COLOR.OFFWHITE,
  textColor: COLOR.TITLEACTIVE,
});

export const themeDarkClass = createTheme(vars, {
  backgroundColor: COLOR.TITLEACTIVE,
  contentBackgroundColor: COLOR.DARKGRAY,
  textColor: COLOR.WHITE,
});

const spread = keyframes({
  '0%': { backgroundColor: 'inherit' },
  '100%': { backgroundColor: vars.backgroundColor },
});

export const pageStyle = style({
  boxSizing: 'border-box',

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
  animation: spread,
  padding: '3rem',
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

export const questionContentStyle = style({
  display: 'flex',
  height: '60vh',
  background: vars.contentBackgroundColor,
  padding: ' 0 1.5rem',
  borderRadius: '10px',
});

export const splitStyle = style({
  display: 'flex',
  width: '100%',
  height: '100% ',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2rem',

  padding: '2rem',
});

export const contentTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: vars.textColor,
  },
]);

export const problemDescContentStyle = style([
  baseFontStyle.small,
  {
    overflowY: 'scroll',
    color: vars.textColor,
  },
]);

export const questionDescStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2.5rem',
});

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const answerInputContentStyle = style({
  display: 'flex',

  width: '100%',
  height: '100%',

  color: vars.textColor,
  backgroundColor: vars.backgroundColor,
});

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});

export const tagListStyle = style({
  display: 'flex',
  gap: '0.25rem',
});
