import { style } from '@vanilla-extract/css';

export const problemSetDetailWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '1.5rem',
});

export const problemSetTitleStyle = style({
  fontWeight: '700',
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
});

export const problemSetDescStyle = style({
  fontSize: '1.5rem',
  lineHeight: '2.75rem',
});

export const problemSetListStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  rowGap: '1.25rem',
  columnGap: '1.5rem',

  width: '100%',

  paddingTop: '1rem',

  '@media': {
    'screen and (max-width: 1600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
