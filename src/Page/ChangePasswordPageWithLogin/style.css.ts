import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';
import { themeColors } from '../../styles/theme.css';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.875rem',

  padding: '4.375rem',
});

export const titleStyle = style([
  baseFontStyle.title,
  {
    textAlign: 'center',
    color: themeColors.text[1],
  },
]);