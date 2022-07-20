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

    color: COLOR.WHITE,
    background: 'transparent',

    whiteSpace: 'nowrap',
  },
]);
