import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '2rem',

  padding: '2.5rem 6.875rem 2.5rem 6.875rem',
});

export const pageContentStyle = style({
  'boxSizing': 'border-box',
  'display': 'flex',
  'alignItems': 'start',
  'justifyContent': 'space-between',
  'width': '100%',

  '@media': {
    'screen and (max-width: 1100px)': {
      flexDirection: 'column',
    },
  },
});

export const subtitleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '2.25rem',
  lineHeight: '2.75rem',
  display: 'flex',
  alignItems: 'center',

  color: '#000000',
});

export const textStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',

  color: '#000000',
});

export const keywordListStyle = style({
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: 'repeat(auto-fill, minmax(6.875rem, 1fr))',
  gridGap: '0.2rem',

  justifyItems: 'center',
  gap: '0.9375rem',
});

export const contentStyle = style({
  'boxSizing': 'border-box',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'start',
  'justifyContent': 'start',
  'gap': '1.5rem',

  'width': '100%',
  'height': '60vh',
  'padding': '2rem',

  'overflowY': 'scroll',

  '@media': {
    'screen and (max-width: 1100px)': {
      height: 'fit-content',
    },
  },
});

export const buttonListStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
