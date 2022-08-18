import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const paginationWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '2rem',
});

export const paginationButtonStyle = style([
  baseFontStyle.medium,
  { width: '50px', height: '30px' },
]);

export const paginationIsSelectedButtonStyle = styleVariants({
  default: [paginationButtonStyle, { color: COLOR.TITLEACTIVE }],
  selected: [paginationButtonStyle, { color: COLOR.ERROR }],
});
