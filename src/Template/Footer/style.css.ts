import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const footerStyle = style([
  baseFontStyle.medium,
  {
    boxSizing: 'border-box',

    position: 'relative',
    transform: 'translatY(-100%)',
    bottom: '0px',
    left: '0px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: '10%',
    paddingBottom: '1rem',

    color: COLOR.WHITE,
    backgroundColor: COLOR.TITLEACTIVE,
  },
]);
