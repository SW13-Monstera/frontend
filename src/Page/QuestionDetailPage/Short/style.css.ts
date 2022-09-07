import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../baseStyle.css';

const spread = keyframes({
  '0%': { backgroundColor: 'inherit' },
  '100%': { backgroundColor: vars.backgroundColor },
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2rem',

  padding: '2rem',
});

export const answerInputWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '2rem',

  width: '100%',
  alignSelf: 'flex-end',

  padding: '1.5rem',
});

export const contentTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: vars.textColor,
  },
]);

export const answerInputTitleStyle = style([
  baseFontStyle.medium,
  {
    color: vars.textColor,
  },
]);

export const problemDescContentStyle = style([
  baseFontStyle.medium,
  {
    overflow: 'auto',
    color: vars.textColor,
  },
]);

const vibration = keyframes({
  from: { transform: 'rotate(1deg)' },
  to: { transform: 'rotate(-1deg)' },
});

export const answerInputContentStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',

    width: '60%',

    padding: '2rem 1rem',

    color: vars.textColor,
    backgroundColor: vars.backgroundColor,
    borderRadius: '20px',
  },
]);

export const answerInputScoredStyle = styleVariants({
  correct: [answerInputContentStyle, { border: '3px solid green', color: COLOR.CORRECT }],
  wrong: [
    answerInputContentStyle,
    {
      border: '3px solid red',
      color: COLOR.ERROR,
      animationName: vibration,
      animationDuration: '.1s',
      animationIterationCount: 10,
    },
  ],
  default: [answerInputContentStyle, {}],
});

export const tagListStyle = style({
  display: 'flex',
  gap: '0.25rem',
});

export const answerLengthOpenStyle = style({
  visibility: 'visible',
});
export const answerLengthNotOpenStyle = style({
  visibility: 'hidden',
});

export const scoreStyle = style([
  baseFontStyle.large,
  {
    alignSelf: 'flex-end',
    padding: '1.5rem',
  },
]);
