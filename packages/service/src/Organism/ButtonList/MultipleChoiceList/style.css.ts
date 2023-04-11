import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const MultipleChoiceListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.5rem',
  height: '100%',
});

export const MultipleChoiceListTopStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const contentTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
});

export const choiceListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  width: '100%',
  height: 'fit-content',

  overflow: 'auto',

  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',

  color: themeColors.text[5],
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
    backgroundColor: themeColors.background.F3,
    cursor: 'pointer',
    border: `1px solid ${themeColors.line.d}`,
    ':hover': { filter: 'brightness(90%)' },
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
  correct: [gradeResultStyle, { color: COLOR.GREEN }],
  wrong: [gradeResultStyle, { color: COLOR.RED }],
});

export const resultWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  alignSelf: 'flex-end',
});

export const isMultipleAnswerStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});
