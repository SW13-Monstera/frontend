import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

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

export const descStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
});

export const titleTagStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const tagListStyle = style({
  display: 'flex',
});

export const problemDetailStyle = style({
  display: 'flex',
  gap: '3rem',
  width: 'fit-content',
  height: '3.3125rem',
  padding: '.75rem 1.5rem',
  background: themeColors.background.F8,
  borderRadius: '8px',
});

export const problemDescriptionElementWrapperStyle = style({
  gap: '.5rem',
  whiteSpace: 'nowrap',
});

export const problemDescriptionLabelStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.4375rem',
  color: COLOR.TEXT[9],
});

export const problemDescriptionValueStyle = style({
  fontWeight: '500',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',
  color: themeColors.text[2],
});
