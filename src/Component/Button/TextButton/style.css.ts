import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import { vars } from '../theme.css';

export const textButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '107px',
  height: '48px',

  borderRadius: '.5rem',

  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.5rem',

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
      border: `.0625rem solid ${COLOR.PRIMARY}`,
    },
  ],
});

export const textButtonSizeStyle = styleVariants({
  medium: [
    {
      width: '107px',
      height: '48px',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
    },
  ],
  large: [{ width: '504px', height: '74.4px' }],
  small: [
    {
      width: '93px',
      height: '35px',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px',
      borderRadius: '2.5rem',
    },
  ],
  largeMedium: [{ width: vars.size.largeMedium.width, height: vars.size.largeMedium.height }],
});

export const unactivatedStyle = style({
  cursor: 'not-allowed',
  backgroundColor: COLOR.GRAY,
  ':hover': { filter: 'none' },
});
