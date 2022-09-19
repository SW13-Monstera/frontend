import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const dropdownContentElementStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',

  color: themeColors.text[5],
});
