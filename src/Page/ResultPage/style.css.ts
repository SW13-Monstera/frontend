import { themeColors } from './../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';
import { COLOR } from '../../constants/color';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '2rem',

  padding: '2.5rem 6.875rem',
});

export const pageContentStyle = style({
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
  wordBreak: 'break-all',
  padding: '1.5rem 1rem',
});

export const standardAnswerContentStyle = style([
  answerContentStyle,
  {
    padding: '1.5rem 1rem',
  },
]);

export const keywordListStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '0.5rem',
  flexWrap: 'wrap',
  width: '100%',
});

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',

  width: '100%',
  height: '100%',

  padding: '1rem',
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
  gap: '5rem',
  width: '100%',
  height: '13.4375rem',

  background: '#F8FAFD',
  borderRadius: '24px',
  color: COLOR.TITLEACTIVE,

  padding: '2rem 1.5rem',
});

export const numberLineChartTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
  color: COLOR.TITLEACTIVE,
});

export const numberLineChartStrongTitleStyle = style([
  numberLineChartTitleStyle,
  {
    color: COLOR.PRIMARY,
  },
]);

export const contentListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export const contentElementBaseStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  listStyleType: 'disc',
});

export const contentElementStyle = styleVariants({
  true: [contentElementBaseStyle, { color: COLOR.PRIMARY }],
  false: [contentElementBaseStyle, { color: themeColors.text[5] }],
});

export const evaluationButtonListStyle = style({
  display: 'flex',
  flex: 1,
  gap: '1rem',
  alignItems: 'center',
});

export const evaluationButtonListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gap: '.7rem',
  paddingTop: '1rem',
});

export const evaluationWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  alignSelf: 'end',
});

export const phraseStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',
  color: themeColors.text[3],
});

export const popoverWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

export const popoverMainContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export const popoverListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',
});

export const popoverTitleStyle = style({
  fontWeight: '500',
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  color: themeColors.text[1],
  paddingBottom: '.5rem',
});

export const popoverContentStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',
  color: themeColors.text[1],
});

export const popoverSubmitButtonStyle = style({
  alignSelf: 'center',
});

export const etcInputStyle = style({
  padding: '.5rem',
  border: `1px solid ${COLOR.LINE.c}`,
  borderRadius: '8px',
});

export const scoreEvaluationWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  alignSelf: 'end',
  gap: '.5rem',
});
