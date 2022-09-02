import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const tagStyle = style([
  baseFontStyle.xsmall,
  {
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 'fit-content',
    height: '1.5rem',

    color: 'black',
    background: COLOR.TAG1,
    borderRadius: '10px',

    textAlign: 'center',

    padding: '0.5rem',

    whiteSpace: 'nowrap',
  },
]);
