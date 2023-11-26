import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../../styles/theme.css';

export const profileImage = style({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: themeColors.background.F3,
});

export const profileWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',
  whiteSpace: 'nowrap',
});

export const contentWrap = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  gap: '0.5rem',
  borderBottom: `1px solid ${themeColors.line.d}`,
});
