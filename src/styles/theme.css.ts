import { COLOR } from '../constants/color';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const themeColors = createThemeContract({
  background: {
    FF: null,
    FA: null,
    F0: null,
    F8: null,
    F3: null,
  },
  text: { '1': null, '9': null, '2': null, '5': null, '3': null },
  line: {
    d: null,
    e: null,
  },
});

export const lightTheme = createTheme(themeColors, {
  background: {
    FF: COLOR.WHITE,
    FA: COLOR.BACKGROUND.FA,
    F0: COLOR.BACKGROUND.F0,
    F8: COLOR.BACKGROUND.F8,
    F3: COLOR.BACKGROUND.F3,
  },
  text: {
    '1': COLOR.TEXT[1],
    '9': COLOR.TEXT[9],
    '2': COLOR.TEXT[2],
    '5': COLOR.TEXT[5],
    '3': COLOR.TEXT[3],
  },
  line: {
    d: COLOR.LINE.d,
    e: COLOR.LINE.e,
  },
});

export const darkTheme = createTheme(themeColors, {
  background: {
    FF: COLOR.DARK[0],
    FA: COLOR.DARK[2],
    F0: COLOR.DARK[1],
    F8: COLOR.DARK[1],
    F3: COLOR.DARK[1],
  },
  text: {
    '1': COLOR.WHITE,
    '9': COLOR.WHITE,
    '2': COLOR.WHITE,
    '5': COLOR.LINE.c,
    '3': COLOR.TEXT[9],
  },
  line: {
    d: COLOR.DARK[3],
    e: COLOR.DARK[2],
  },
});
