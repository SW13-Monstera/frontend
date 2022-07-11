import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const iconButtonStyle = style({
  display: 'flex',
  alignItems: vars.display.flex.alignItems,
  justifyContent: vars.display.flex.justifyContents,

  width: vars.size.icon.length,
  height: vars.size.icon.length,

  color: vars.color.primary.text,
  borderRadius: vars.border.radius,
});
