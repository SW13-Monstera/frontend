import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

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
