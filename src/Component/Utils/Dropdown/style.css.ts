import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const dropDownStyle = style({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
});

export const dropdownBoxStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '.625rem',

  width: '100%',
  height: '2.5rem',

  color: themeColors.text[5],
  background: themeColors.background.FF,
  boxShadow: `0px 2px 4px ${themeColors.shadow[2]}`,
  borderRadius: '4px',

  padding: '.5rem .75rem',
});

export const dropDownContentStyle = style({
  position: 'absolute',

  display: 'flex',
  flexDirection: 'column',
  gap: '50%',

  width: '100%',
  padding: '.375rem .75rem',

  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  background: themeColors.background.FF,
  boxShadow: `0px 2px 16px ${themeColors.shadow[1]}`,
  borderRadius: '4px',

  zIndex: '1',
});

export const dropdownContentVisibilityStyle = styleVariants({
  visible: [dropDownContentStyle, { visibility: 'visible' }],
  hidden: [dropDownContentStyle, { visibility: 'hidden' }],
});

export const dropDownListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '.25rem',
});

export const downIconStyle = style({
  width: '0.5rem',
});
