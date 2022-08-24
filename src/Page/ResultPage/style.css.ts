import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '2rem',

  padding: '2.5rem 6.875rem',
});

export const pageContentStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  width: '100%',

  '@media': {
    'screen and (max-width: 1100px)': {
      flexDirection: 'column',
    },
  },
});

export const subtitleStyle = style([
  baseFontStyle.xlarge,
  {
    display: 'flex',
    alignItems: 'center',

    color: COLOR.TITLEACTIVE,
  },
]);

export const answerContentStyle = style([
  baseFontStyle.small,
  {
    overflow: 'auto',
    color: COLOR.TITLEACTIVE,
  },
]);

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
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',

  width: '100%',
  height: '60vh',
  padding: '1rem 2rem',

  overflow: 'auto',

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
