import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';
import { themeColors } from '../../../styles/theme.css';

export const labelWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',
});

export const circleStyle = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
});

export const nameStyle = style([
  baseFontStyle.xsmall,
  {
    color: themeColors.text[2],
  },
]);
