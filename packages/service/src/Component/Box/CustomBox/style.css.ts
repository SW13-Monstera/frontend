import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const rowBoxStyle = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);

export const columnBoxStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);
