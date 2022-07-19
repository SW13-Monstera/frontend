import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const transparentButtonStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 'fit-content',
    height: 'fit-content',

    color: 'white',
    background: 'transparent',

    whiteSpace: 'nowrap',
  },
]);
