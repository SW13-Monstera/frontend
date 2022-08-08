import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  boxSizing: 'border-box',

  display: 'flex',

  width: '100%',
  height: 'auto',
  minHeight: '100%',
  padding: '5rem 2.5rem',
});
