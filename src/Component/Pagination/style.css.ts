import { themeColors } from './../../styles/theme.css';
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

export const paginationButtonStyle = style({
  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '1.125rem',
  padding: '.125rem .25rem',
  width: '1.5rem',
  height: '1.375rem',
  borderRadius: '2px',
});

export const paginationIsSelectedButtonStyle = styleVariants({
  default: [
    paginationButtonStyle,
    {
      color: themeColors.text[9],
    },
  ],
  selected: [
    paginationButtonStyle,
    {
      fontWeight: '700',
      color: COLOR.WHITE,
      background: COLOR.PRIMARY,
    },
  ],
});

export const dotdotdotStyle = style({ cursor: 'default' });
