import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
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
  height: 'fit-content',
  minHeight: '75%',

  overflow: 'auto',

  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',

  color: themeColors.text[5],
});

export const choiceWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
  padding: '1.125rem',
  borderRadius: '8px',
  backgroundColor: vars.backgroundColor,
  cursor: 'pointer',
  border: `1px solid ${themeColors.line.d}`,
  ':hover': { filter: 'brightness(90%)' },
});

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

export const choiceCheckboxCheckedStyle = style({
  fontWeight: '700',
  border: `2px solid ${themeColors.line.d}`,
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
  wrong: [gradeResultStyle, { color: COLOR.RED, backgroundColor: COLOR.BACKGROUND.RED }],
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

export const isMultipleAnswerStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
});
