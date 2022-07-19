import { style, styleVariants } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../theme.css';

export const textButtonStyle = style({
  display: 'flex',
  alignItems: vars.display.flex.alignItems,
  justifyContent: vars.display.flex.justifyContents,

  width: vars.size.medium.width,
  height: vars.size.medium.height,

  borderRadius: vars.border.radius,

  fontFamily: vars.font.body,
  fontStyle: vars.font.style,
  fontWeight: vars.font.weight,
  fontSize: vars.font.size,
  lineHeight: vars.font.lineHeight,
});

export const textButtonThemeStyle = styleVariants({
  primary: [
    baseFontStyle.large,
    textButtonStyle,
    { backgroundColor: vars.color.primary.back, color: vars.color.primary.text },
  ],
  secondary: [
    baseFontStyle.large,
    textButtonStyle,
    { backgroundColor: vars.color.secondary.back, color: vars.color.secondary.text },
  ],
});

export const textButtonSizeStyle = styleVariants({
  medium: [{ width: vars.size.medium.width, height: vars.size.medium.height }],
  large: [{ width: vars.size.large.width, height: vars.size.large.height }],
});
