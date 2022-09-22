import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',
  width: '100%',

  padding: '3rem',
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  width: '100%',
});

export const titleTagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const questionContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '60vh',
  background: themeColors.background.FA,
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',
});

export const buttonListWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

export const bottomContentStyle = style({
  padding: '2rem',
});
