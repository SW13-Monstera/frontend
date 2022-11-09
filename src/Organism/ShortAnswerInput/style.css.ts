import { themeColors } from './../../styles/theme.css';
import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

const vibration = keyframes({
  from: { transform: 'rotate(1deg)' },
  to: { transform: 'rotate(-1deg)' },
});

export const resultWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  margin: '1.5rem 1.5rem 1.5rem 0',
  minWidth: '17.5rem',
});

export const answerInputContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: '17.5rem',
  width: '100%',
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
  shown: [resultBoxWrapperStyle, { color: COLOR.PRIMARY, backgroundColor: COLOR.BACKGROUND.BLUE }],
});

export const gapStyle = style({
  gap: '1rem',
});

export const answerBoxWrapperStyle = style({
  gap: '1rem',
  alignSelf: 'flex-end',
});

export const showAnswerButtonStyle = style({
  color: themeColors.text[3],
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  alignSelf: 'flex-end',
});
