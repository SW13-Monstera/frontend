import { themeColors } from './../../../styles/theme.css';
import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2rem',

  padding: '2rem',
});

export const contentTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
  color: themeColors.text[2],
});

export const problemDescContentStyle = style({
  overflow: 'auto',
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',
  color: themeColors.text[5],
});

const vibration = keyframes({
  from: { transform: 'rotate(1deg)' },
  to: { transform: 'rotate(-1deg)' },
});

export const resultWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  alignSelf: 'flex-end',
  margin: '1.5rem',
});

export const answerInputContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '17.5rem',
  height: '4rem',

  padding: '2rem 1rem',

  color: themeColors.text[5],
  background: themeColors.line.e,
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',

  fontWeight: '500',
  fontSize: '1.5rem',
  lineHeight: '1rem',

  '::placeholder': {
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '4rem',
    verticalAlign: 'middle',
  },
});

export const tagListStyle = style({
  display: 'flex',
  gap: '0.25rem',
});

export const resultBoxWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.625rem',

  width: 'fit-content',
  minWidth: '12rem',
  maxWidth: '17.5rem',
  height: '4rem',

  padding: '2rem 1rem',

  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',

  borderRadius: '8px',

  ':hover': { filter: 'brightness(102%)' },
});

export const resultAnswerStyle = styleVariants({
  correct: [resultBoxWrapperStyle, { color: COLOR.GREEN, backgroundColor: COLOR.BACKGROUND.GREEN }],
  wrong: [
    resultBoxWrapperStyle,
    {
      color: COLOR.RED,
      backgroundColor: COLOR.BACKGROUND.RED,
      animationName: vibration,
      animationDuration: '.1s',
      animationIterationCount: 10,
    },
  ],
});

export const scoreStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '.5rem',
});

export const scoreLabelStyle = style({
  fontWeight: '400',
  fontSize: '1.125rem',
  lineHeight: '1.625rem',
  color: themeColors.text[9],
});

export const scoreValueStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
  color: COLOR.RED,
});
