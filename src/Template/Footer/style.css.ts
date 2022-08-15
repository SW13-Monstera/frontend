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
    gap: '0.5rem',

    width: '100%',
    height: '10%',
    padding: '1.5rem',

    color: COLOR.WHITE,
    backgroundColor: COLOR.TITLEACTIVE,
  },
]);
