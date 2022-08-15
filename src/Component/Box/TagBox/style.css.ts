import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const tagStyle = style([
  baseFontStyle.xsmall,
  {
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '56px',
    height: '24px',

    color: 'black',
    background: '#fff1cd',
    borderRadius: '10px',

    textAlign: 'center',

    padding: '0.0313rem',

    whiteSpace: 'nowrap',

    '@media': {
      'screen and (max-width: 600px)': {
        width: '48px',
        height: '20px',
      },
    },
  },
]);
