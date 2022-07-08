import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const secondaryButtonStyle = style({
  display: 'flex',
  alignItems: vars.display.flex.alignItems,
  justifyContent: vars.display.flex.justifyContents,

  width: vars.size.medium.width,
  height: vars.size.medium.height,

  backgroundColor: vars.color.secondary.back,
  color: vars.color.secondary.text,
  borderRadius: vars.border.radius,

  fontFamily: vars.font.body,
  fontStyle: vars.font.style,
  fontWeight: vars.font.weight,
  fontSize: vars.font.size,
  lineHeight: vars.font.lineHeight,
});
