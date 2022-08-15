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
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0.5rem',
});

export const descStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const titleTagStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});
