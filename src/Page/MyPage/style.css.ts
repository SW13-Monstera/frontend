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
    'screen and (max-width: 1300px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const leftSideWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '35%',
  '@media': {
    'screen and (max-width: 1300px)': {
      width: '88%',
    },
  },
});

export const rightSideWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '45%',
  marginTop: '0.8rem',
  '@media': {
    'screen and (max-width: 1300px)': {
      width: '88%',
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
  alignItems: 'flex-start',
  gap: '1rem',
});
