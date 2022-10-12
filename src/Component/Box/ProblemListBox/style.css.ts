import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const problemListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  backgroundColor: themeColors.background.F3,
  borderRadius: '20px',

  padding: '2rem',
  overflowX: 'auto',

  width: '100%',
});

export const problemListElementsStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
});

export const problemListTitleStyle = style({
  display: 'flex',
  gap: '1rem',
});
