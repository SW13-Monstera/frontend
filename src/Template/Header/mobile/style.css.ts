import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../styles/theme.css';

export const mobileHeaderStyle = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': { 'screen and (min-width: 721px)': { display: 'none' } },
});

export const topWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${themeColors.line.e}`,
});

export const bottomWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
});
