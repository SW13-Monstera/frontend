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
    maxWidth: '62px',
    height: '24px',

    color: 'black',
    background: COLOR.TAG1,
    borderRadius: '10px',

    textAlign: 'center',

    padding: '0.6rem',

    whiteSpace: 'nowrap',

    '@media': {
      'screen and (max-width: 600px)': {
        width: '60px',
        height: '20px',
      },
    },
  },
]);