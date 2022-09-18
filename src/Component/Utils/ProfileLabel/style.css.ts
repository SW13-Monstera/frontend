import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const profileLabelStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '2rem',
  },
]);

export const nameStyle = style({
  width: '5rem',
  color: themeColors.text[3],
});

export const valueStyle = style({
  color: themeColors.text[1],
});
