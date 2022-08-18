import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const paginationWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  padding: '2rem',
});

export const paginationButtonStyle = style([
  baseFontStyle.medium,
  {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    ':hover': {
      backgroundColor: COLOR.OFFWHITE,
    },
  },
]);

export const paginationIsSelectedButtonStyle = styleVariants({
  default: [paginationButtonStyle, { color: COLOR.TITLEACTIVE }],
  selected: [paginationButtonStyle, { color: COLOR.ERROR }],
});
