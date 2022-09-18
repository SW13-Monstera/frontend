import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const statisticsBoxStyle = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: themeColors.background.F3,
    borderRadius: '10px',

    padding: '1rem',
  },
]);

export const statisticsNumberStyle = style([baseFontStyle.xlarge]);
