import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../../../styles/theme.css';

export const boxStyle = style({
  marginTop: '28px',
  padding: '24px',
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',
});
