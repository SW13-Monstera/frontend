import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const warningBaseStyle = style({
  fontWeight: '400',
  fontSize: '0.875rem',
  lineHeight: '0.5rem',
  margin: '.75rem 0 0 0',
});

export const warningStyle = styleVariants({
  true: [warningBaseStyle, { color: COLOR.RED }],
  false: [warningBaseStyle, { display: 'none' }],
});

export const displayNoneStyle = style({
  display: 'none',
});
