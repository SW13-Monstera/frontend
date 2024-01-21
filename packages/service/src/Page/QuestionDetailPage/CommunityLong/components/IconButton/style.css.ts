import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../../styles/theme.css';

export const iconButtonStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 4px 4px',
  color: themeColors.text[2],
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.2rem',
});
