import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const statisticsBoxStyle = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: COLOR.OFFWHITE,
    borderRadius: '10px',

    padding: '1rem',
  },
]);

export const statisticsNumberStyle = style([baseFontStyle.xlarge]);
