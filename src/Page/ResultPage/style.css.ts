import { style } from '@vanilla-extract/css';

export const pageStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '2rem',

  padding: '40px 110px 40px 110px',
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
  gridTemplateColumns: 'repeat(3, minmax(110px, 1fr))',
  gridGap: '0.2rem',

  justifyItems: 'center',
  gap: '15px',
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
