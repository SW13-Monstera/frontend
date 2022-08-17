import { style, styleVariants } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../theme.css';

export const textButtonStyle = style([
  baseFontStyle.large,
  {
    display: 'flex',
    alignItems: vars.display.flex.alignItems,
    justifyContent: vars.display.flex.justifyContents,

    borderRadius: vars.border.radius,

    transitionProperty: 'background-color, color',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease-out',

    ':hover': { filter: 'brightness(90%)' },
  },
]);

export const textButtonThemeStyle = styleVariants({
  primary: [
    textButtonStyle,
    { backgroundColor: vars.color.primary.back, color: vars.color.primary.text },
  ],
  secondary: [
    textButtonStyle,
    { backgroundColor: vars.color.secondary.back, color: vars.color.secondary.text },
  ],
});

export const textButtonSizeStyle = styleVariants({
  small: [{ width: vars.size.small.width, height: vars.size.small.height }],
  medium: [{ width: vars.size.medium.width, height: vars.size.medium.height }],
  large: [{ width: vars.size.large.width, height: vars.size.large.height }],
});
