import { createTheme, style } from '@vanilla-extract/css';

export const [inputBoxClass, inputVars] = createTheme({
  size: {
    medium: {
      width: '31.25rem',
      height: '4.375rem',
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
  'fontSize': '2rem',
  'lineHeight': '2.4375rem',
  'display': 'flex',
  'alignItems': 'center',

  '::placeholder': {
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',

    color: '#D8D8D8',
  },
});
