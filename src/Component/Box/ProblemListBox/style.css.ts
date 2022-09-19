import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const problemListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  backgroundColor: themeColors.background.F3,
  borderRadius: '20px',

  padding: '2rem',
});

export const problemListElementsrStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1rem',
});

export const problemListTitleStyle = style({
  display: 'flex',
  gap: '1rem',
});
