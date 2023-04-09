import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import { themeColors } from '../../../styles/theme.css';

export const scoreStyle = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  gap: '.5rem',
});

export const scoreLabelStyle = style({
  fontWeight: '400',
  fontSize: '1.125rem',
  lineHeight: '1.625rem',
  color: themeColors.text[9],
});

export const scoreValueStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  color: COLOR.RED,
});
