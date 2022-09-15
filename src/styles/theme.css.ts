import { COLOR } from '../constants/color';

import { createTheme, createThemeContract } from '@vanilla-extract/css';

const colors = createThemeContract({
  background: {
    '1': null,
    '2': null,
    '3': null,
  },
  text: { '1': null, '2': null, '3': null },
});

export const [lightTheme, lightVars] = createTheme(colors, {
  background: {
    '1': COLOR.WHITE,
    '2': COLOR.WHITE,
    '3': COLOR.WHITE,
  },
  text: {
    '1': COLOR.TEXT[1],
    '2': COLOR.WHITE,
    '3': COLOR.WHITE,
  },
});

export const [darkTheme, darkVars] = createTheme(colors, {
  background: {
    '1': COLOR.DARK[0],
    '2': COLOR.WHITE,
    '3': COLOR.WHITE,
  },
  text: {
    '1': COLOR.WHITE,
    '2': COLOR.WHITE,
    '3': COLOR.WHITE,
  },
});
