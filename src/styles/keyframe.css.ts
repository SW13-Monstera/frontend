import { keyframes } from '@vanilla-extract/css';
import { themeColors } from './theme.css';

export const spreadBoxShadow = keyframes({
  '0%': { boxShadow: `0px 0px 4px ${themeColors.shadow[1]}` },
  '100%': { boxShadow: `4px 8px 24px  ${themeColors.shadow[1]}` },
});
