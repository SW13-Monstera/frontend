import { createTheme, style } from '@vanilla-extract/css';
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
  baseFontStyle.xlarge,
  {
    'display': 'flex',
    'alignItems': 'center',

    'width': inputVars.size.medium.width,
    'height': inputVars.size.medium.height,

    'color': '#000000',
    'background': '#FFFFFF',
    'border': '1px solid #D9D9D9',
    'borderRadius': '10px',

    '::placeholder': {
      fontFamily: 'Inter',
      fontWeight: '300',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',

      color: '#D8D8D8',
    },
  },
]);
