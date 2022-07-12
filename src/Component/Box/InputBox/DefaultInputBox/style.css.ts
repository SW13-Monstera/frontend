import { createTheme, style } from '@vanilla-extract/css';

export const [inputBoxClass, inputVars] = createTheme({
  size: {
    medium: {
      width: '500px',
      height: '70px',
    },
  },
});

export const defaultInputBoxStyle = style({
  'color': '#000000',
  'background': '#FFFFFF',
  'border': '1px solid #D9D9D9',
  'borderRadius': '10px',
  'width': inputVars.size.medium.width,
  'height': inputVars.size.medium.height,

  'fontFamily': 'Inter',
  'fontWeight': '300',
  'fontSize': '32px',
  'lineHeight': '39px',
  'display': 'flex',
  'alignItems': 'center',

  '::placeholder': {
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '24px',

    color: '#D8D8D8',
  },
});
