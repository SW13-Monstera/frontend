import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
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

export const titleStyle = style([
  baseFontStyle.title,
  {
    textAlign: 'center',
    color: COLOR.TITLEACTIVE,
  },
]);

export const descStyle = style([
  baseFontStyle.small,
  {
    textAlign: 'center',
    color: COLOR.TITLEACTIVE,
  },
]);

export const logoTitleStyle = style({
  width: '10rem',
});
