import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';

export const pageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  padding: '2rem',
});
export const pageTitleStyle = style([baseFontStyle.title, {}]);
