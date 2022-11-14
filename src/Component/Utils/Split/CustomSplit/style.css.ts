import { style, styleVariants } from '@vanilla-extract/css';

export const splitStyle = style({
  display: 'flex',
  width: '100%',
  height: '100% ',
  minHeight: 'inherit',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '2rem 0 2rem 2rem',
  minHeight: 'fit-content',
  minWidth: '17rem',
});

export const contentWrapperSideStyle = styleVariants({
  left: [contentWrapperStyle, { padding: '1rem 0 1rem 1rem' }],
  right: [contentWrapperStyle, { padding: '1rem 1rem 1rem 0' }],
});
