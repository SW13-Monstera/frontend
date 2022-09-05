import { createTheme, style } from '@vanilla-extract/css';
import { COLOR } from '../../../../constants/color';
import baseFontStyle from '../../../../styles/font.css';

export const [inputBoxClass, inputVars] = createTheme({
  size: {
    medium: {
      width: '31.25rem',
      height: '4.375rem',
    },
  },
});

export const defaultInputBoxStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    alignItems: 'center',

    width: inputVars.size.medium.width,
    height: inputVars.size.medium.height,

    color: COLOR.TITLEACTIVE,
    background: COLOR.WHITE,
    border: '1px solid #D9D9D9',
    borderRadius: '10px',

    padding: '0 1rem',

    '::placeholder': {
      fontFamily: 'Inter',
      fontWeight: '300',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',

      color: COLOR.GRAY,
    },
  },
]);
