import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import { vars } from '../theme.css';

export const textButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transitionProperty: 'background-color, color',
  transitionDuration: '1s',
  transitionTimingFunction: 'ease-out',

  ':hover': { filter: 'brightness(90%)' },
});

export const textButtonThemeStyle = styleVariants({
  primary: [textButtonStyle, { backgroundColor: COLOR.PRIMARY, color: COLOR.WHITE }],
  secondary: [textButtonStyle, { backgroundColor: COLOR.TRANSPARENT, color: COLOR.TEXT[3] }],
  tertiary: [
    textButtonStyle,
    {
      backgroundColor: COLOR.TRANSPARENT,
      color: COLOR.PRIMARY,
      border: `1px solid ${COLOR.PRIMARY}`,
    },
  ],
});

export const textButtonSizeStyle = styleVariants({
  medium: [
    {
      width: '6.6875rem',
      height: '3rem',
      fontWeight: '700',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      borderRadius: '8px',
    },
  ],
  small: [
    {
      width: '5.8125rem',
      height: '2.1875rem',
      fontWeight: '700',
      fontSize: '1rem',
      lineHeight: '1.1875rem',
      borderRadius: '40px',
    },
  ],
  large: [
    {
      width: '31.5rem',
      height: '3rem',
      fontWeight: '700',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      borderRadius: '8px',
    },
  ],
  largeMedium: [
    {
      width: vars.size.largeMedium.width,
      height: vars.size.largeMedium.height,
      borderRadius: '8px',
    },
  ],
});

export const unactivatedStyle = style({
  cursor: 'not-allowed',
  backgroundColor: COLOR.GRAY,
  ':hover': { filter: 'none' },
});
