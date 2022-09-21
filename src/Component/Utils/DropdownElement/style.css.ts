import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const dropdownContentElementStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',

  color: themeColors.text[5],
});

export const checkboxDefaultStyle = style({
  position: 'absolute',
  opacity: '0',
  cursor: 'pointer',
  height: '0',
  width: '0',
});

export const checkboxStyle = style({
  height: '1.25rem',
  width: '1.25rem',
  cursor: 'pointer',
});

export const labelStyle = style({
  cursor: 'pointer',
});

export const labelIsCheckedStyle = styleVariants({
  true: [labelStyle, { color: COLOR.PRIMARY }],
  false: [labelStyle, { color: themeColors.text[5] }],
});
