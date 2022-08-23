import { createThemeContract, createTheme, style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

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
  baseFontStyle.medium,
  {
    overflowY: 'scroll',
    color: vars.textColor,
  },
]);
