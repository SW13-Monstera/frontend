import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../baseStyle.css';

export const contentTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: vars.textColor,
  },
]);

export const choiceListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  width: '100%',

  overflow: 'auto',
});

export const choiceWrapperStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
    padding: '1.125rem',
    borderRadius: '10px',
    backgroundColor: vars.backgroundColor,
    cursor: 'pointer',

    ':hover': {
      border: '1px solid',
      borderColor: COLOR.GRAY,
    },
  },
]);

export const choiceCheckboxStyle = style({
  flex: '0 0 auto',
  margin: '0px 0.875rem 0px 0px',

  width: '1.25rem',
  height: '1.25rem',

  border: '2px',
  borderColor: COLOR.DARKGRAY,
  borderRadius: '10px',

  background: 'inherit',
});

export const gradeResultStyle = style([
  baseFontStyle.xlarge,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    alignSelf: 'flex-end',
  },
]);

export const gradeResultScoredStyle = styleVariants({
  correct: [gradeResultStyle, { color: COLOR.CORRECT }],
  wrong: [gradeResultStyle, { color: COLOR.ERROR }],
});
