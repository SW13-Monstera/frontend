import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const problemTitleBoxStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '10rem',
  height: '2rem',

  padding: '0 1rem',

  borderRadius: '20px',
  color: COLOR.TITLEACTIVE,
});

export const textStyle = style([
  baseFontStyle.small,
  {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
]);
