import { themeColors } from './../../../../styles/theme.css';
import { createTheme, style } from '@vanilla-extract/css';
import { COLOR } from '../../../../constants/color';

export const [inputBoxClass, inputVars] = createTheme({
  size: {
    medium: {
      width: '31.25rem',
      height: '4.375rem',
    },
  },
});

export const defaultInputBoxStyle = style({
  display: 'flex',
  alignItems: 'center',

  width: inputVars.size.medium.width,
  height: inputVars.size.medium.height,

  color: themeColors.text[1],
  background: themeColors.background.FF,
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
});

export const warningStyle = style({
  color: COLOR.RED,
});
