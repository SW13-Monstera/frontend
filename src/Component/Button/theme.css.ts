import { createTheme } from '@vanilla-extract/css';

export const [buttonThemeClass, vars] = createTheme({
  display: {
    flex: {
      alignItems: 'center',
      justifyContents: 'center',
    },
  },
  color: {
    primary: { back: '#4682DB', text: '#ffffff' },
    secondary: { back: '#D9D9D9', text: '#0000000' },
  },
  font: {
    body: 'Inter',
    style: 'normal',
    weight: '400',
    size: '1.5rem',
    lineHeight: '1.5rem',
  },
  size: {
    medium: {
      width: '9.25rem',
      height: '4.125rem',
    },
    large: {
      width: '31.5rem',
      height: '4.375rem',
    },
    icon: {
      length: '3.125rem',
    },
  },
  border: {
    radius: '10px',
  },
});
