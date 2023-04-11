import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../styles/theme.css';

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
