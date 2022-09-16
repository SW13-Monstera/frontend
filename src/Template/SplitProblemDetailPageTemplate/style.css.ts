import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const splitStyle = style({
  display: 'flex',
  width: '100%',
  height: '100% ',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '1.5rem',

  padding: '2rem',
});

export const contentTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',
  color: themeColors.text[2],
});

export const problemDescContentStyle = style({
  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',
  color: themeColors.text[5],
  overflowY: 'hidden',
});
