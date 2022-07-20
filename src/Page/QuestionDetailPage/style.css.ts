<<<<<<< HEAD
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
=======
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';
>>>>>>> dev

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',

  width: '100%',
<<<<<<< HEAD

  color: vars.textColor,
  backgroundColor: vars.backgroundColor,

  transition: 'background-color 0.2s',
  animation: spread,
=======
  padding: '3rem',
>>>>>>> dev
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
<<<<<<< HEAD
  height: '50vh',
  background: vars.contentBackgroundColor,
  padding: ' 0 1.5rem 0 1.5rem',
  borderRadius: '10px',
=======
  height: '70vh',
  background: COLOR.OFFWHITE,
>>>>>>> dev
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

export const problemDescTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: COLOR.TITLEACTIVE,
  },
]);

export const problemDescContentStyle = style([
  baseFontStyle.medium,
  {
    color: COLOR.TITLEACTIVE,
  },
]);

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
