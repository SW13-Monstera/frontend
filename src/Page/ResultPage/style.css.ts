import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';
import { COLOR } from '../../constants/color';

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

    color: themeColors.text[1],
  },
]);

export const answerContentStyle = style({
  overflow: 'auto',
  textAlign: 'start',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',
  color: themeColors.text[5],
});

export const standardAnswerContentStyle = style([
  answerContentStyle,
  {
    height: '300px',
    padding: '1.5rem 1rem',
  },
]);

export const keywordListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.9375rem',
  width: '100%',
  overflowX: 'auto',
});

export const contentStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',

  width: '100%',
  height: '100%',

  '@media': {
    'screen and (max-width: 1100px)': {
      height: 'fit-content',
    },
  },
});

export const standardAnswerStyle = style([
  contentStyle,
  {
    padding: '1rem',
  },
]);

export const buttonListStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});

export const scoreWrapperStyle = style([
  baseFontStyle.xlarge,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginRight: '2rem',
  },
]);

export const myScoreStyle = style({
  alignSelf: 'end',
});

export const numberLineChartWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  width: '100%',
  height: '13.4375rem',

  background: '#F8FAFD',
  borderRadius: '24px',

  padding: '2rem 1.5rem',
});

export const numberLineChartTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
  color: themeColors.text[2],
});

export const numberLineChartStrongTitleStyle = style([
  numberLineChartTitleStyle,
  {
    color: COLOR.PRIMARY,
  },
]);
