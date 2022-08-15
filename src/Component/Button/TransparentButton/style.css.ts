import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const transparentButtonStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 'fit-content',
    height: 'fit-content',

    color: 'inherit',
    background: 'transparent',

    whiteSpace: 'nowrap',

    padding: '1rem',

    ':hover': {
      color: COLOR.GRAY,
    },
  },
]);
