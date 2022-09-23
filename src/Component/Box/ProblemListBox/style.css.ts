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
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 2100px)': { gridTemplateColumns: 'repeat(4, 1fr)' },
    'screen and (max-width: 1700px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
    'screen and (max-width: 1350px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
    'screen and (max-width: 1000px)': { gridTemplateColumns: 'repeat(4, 1fr)' },
    'screen and (max-width: 850px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
    'screen and (max-width: 660px)': { gridTemplateColumns: 'repeat(4, 1fr)' },
    'screen and (max-width: 550px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
    'screen and (max-width: 400px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  },
});

export const problemListTitleStyle = style({
  display: 'flex',
  gap: '1rem',
});
