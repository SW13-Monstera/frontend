import { COLOR } from '../constants/color';

import { createTheme, createThemeContract } from '@vanilla-extract/css';

const colors = createThemeContract({
  background: null,
  text: null,
});

export const lightTheme = createTheme(colors, {
  background: COLOR.WHITE,
  text: COLOR.TEXT[1],
});

export const darkTheme = createTheme(colors, {
  background: COLOR.DARK[0],
  text: COLOR.WHITE,
});
