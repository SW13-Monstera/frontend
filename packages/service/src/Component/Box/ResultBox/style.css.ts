import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

const vibration = keyframes({
  from: { transform: 'rotate(1deg)' },
  to: { transform: 'rotate(-1deg)' },
});

export const gradeResultStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',
  width: '12.0625rem',
  height: '4rem',

  borderRadius: '8px',
  padding: '1.25rem',
  whiteSpace: 'nowrap',
});

export const gradeResultScoredStyle = styleVariants({
  correct: [gradeResultStyle, { color: COLOR.GREEN, backgroundColor: COLOR.BACKGROUND.GREEN }],
  wrong: [
    gradeResultStyle,
    {
      color: COLOR.RED,
      backgroundColor: COLOR.BACKGROUND.RED,
      animationName: vibration,
      animationDuration: '.1s',
      animationIterationCount: 10,
    },
  ],
  shown: [gradeResultStyle, { color: COLOR.PRIMARY, backgroundColor: COLOR.BACKGROUND.BLUE }],
});

export const gradeResultTextStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
});

export const resultWrapperStyle = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  gap: '1rem',
  alignSelf: 'flex-end',
});
