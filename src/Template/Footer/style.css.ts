import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const footerStyle = style([
  baseFontStyle.xsmall,
  {
    boxSizing: 'border-box',

    position: 'relative',
    transform: 'translatY(-100%)',
    bottom: '0px',
    left: '0px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',

    width: '100%',
    height: '11.5rem',
    padding: '3rem 5.3125rem',

    color: themeColors.text[3],
    backgroundColor: themeColors.background.F3,
  },
]);
