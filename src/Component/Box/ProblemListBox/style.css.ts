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
});

export const problemListElementsStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 1500px)': { gridTemplateColumns: 'repeat(4, 1fr)' },
    'screen and (max-width: 1200px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
    'screen and (max-width: 1000px)': { gridTemplateColumns: 'repeat(4, 1fr)' },
    'screen and (max-width: 800px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
  },
});

export const problemListTitleStyle = style({
  display: 'flex',
  gap: '1rem',
});
