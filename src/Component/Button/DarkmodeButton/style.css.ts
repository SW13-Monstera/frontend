import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../styles/theme.css';

export const darkmodeButtonStyle = style({
  width: '10.625rem',
  height: '2.25rem',
  padding: '.5rem 1rem',
  gap: '.5rem',
  color: themeColors.text[5],
  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  background: themeColors.background.FF,
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '24px',
});

export const darkmodeButtonContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',
  whiteSpace: 'nowrap',
});
