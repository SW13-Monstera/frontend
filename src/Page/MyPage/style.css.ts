import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';

export const pageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '3rem',
});

export const pageTitleStyle = style([
  baseFontStyle.xlarge,
  {
    fontWeight: 'bold',
    marginBottom: '1rem',
    paddingLeft: '0.7rem',
  },
]);

export const pageContentWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const rightSideWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '45%',
  '@media': {
    'screen and (max-width: 1000px)': {
      width: '100%',
    },
  },
});

export const colorLabelListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',

  alignSelf: 'end',
});

export const problemStatsWrapperStyle = style({
  gap: '1rem',
});
