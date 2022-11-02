import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const titleLargeStyle = style({
  fontWeight: '700',
  fontSize: '2.25rem',
  lineHeight: '3.25rem',
});

export const titleSmallStyle = style({
  fontWeight: '500',
  fontSize: '2rem',
  lineHeight: '2rem',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
});

export const titleTagStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
});

export const titleTagSmallStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
});

export const tagListStyle = style({
  display: 'flex',
  gap: '.2rem',
  flex: 1,
});

export const problemDetailStyle = style({
  display: 'flex',
  gap: '3rem',
  width: 'fit-content',
  minWidth: '100%',
  maxWidth: '100%',
  height: '3.3125rem',
  padding: '.75rem 1.5rem',
  background: themeColors.background.F8,
  borderRadius: '8px',
  overflowX: 'auto',
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
