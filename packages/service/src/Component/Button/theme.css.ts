import { createTheme } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const [buttonThemeClass, vars] = createTheme({
  display: {
    flex: {
      alignItems: 'center',
      justifyContents: 'center',
    },
  },
  color: {
    primary: { back: COLOR.PRIMARY, text: COLOR.WHITE },
    secondary: { back: COLOR.GRAY, text: COLOR.TITLEACTIVE },
  },
  size: {
    small: {
      width: '5.8125rem',
      height: '2.1875rem',
    },
    medium: {
      width: '9.25rem',
      height: '4.125rem',
    },
    large: {
      width: '31.5rem',
      height: '4.65rem',
    },
    icon: {
      length: '3.125rem',
    },
    largeMedium: {
      width: '29rem',
      height: '4rem',
    },
  },
  border: {
    radius: '10px',
  },
});
