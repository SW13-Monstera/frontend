import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',

  width: '100%',
  padding: '3rem',
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const titleTagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const questionContentStyle = style({
  display: 'flex',
  height: '70vh',
  background: COLOR.OFFWHITE,
});

export const splitStyle = style({
  display: 'flex',
  width: '100%',
});

export const questionDescStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2.5rem',
});

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const problemDescTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: COLOR.TITLEACTIVE,
  },
]);

export const problemDescContentStyle = style([
  baseFontStyle.medium,
  {
    color: COLOR.TITLEACTIVE,
  },
]);

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
