import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '30px',

  width: '100vw',
  height: '100vh',
  padding: '4.375rem',
});

export const descStyle = style([
  baseFontStyle.small,
  {
    textAlign: 'center',
    color: themeColors.text[1],
  },
]);

export const logoTitleStyle = style({
  width: '10rem',
});
