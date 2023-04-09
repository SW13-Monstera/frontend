import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const profileLabelStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '2rem',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});

export const nameStyle = style({
  width: '5rem',
  color: themeColors.text[5],
});

export const valueStyle = style({
  color: themeColors.text[1],
});
