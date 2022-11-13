import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const problemListWrapperStyle = style({
  display: 'flex',
  gap: '1rem',

  backgroundColor: themeColors.background.FF,
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',

  padding: '2rem',
  overflowX: 'auto',

  width: '100%',
});

export const problemListTitleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
  width: '6.25rem',
  background: themeColors.background.FA,
  borderRadius: '8px',
  padding: '1rem',
});

export const problemListTitleTextStyle = style({
  fontWeight: '700',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: themeColors.text[5],
  whiteSpace: 'nowrap',
});

export const problemListTitleNumberStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: themeColors.text[5],
});

export const problemListInnerWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
});

export const problemListByTypeStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '.75rem',
  padding: '1rem',
});
