import { createTheme, style } from '@vanilla-extract/css';

const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'Inter',
  },
});

const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  fontFamily: vars.font.body,
});

const topStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',

  width: '100%',
});

const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

const titleStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '48px',
});

const statisticsStyle = style({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '24px',
});

export { themeClass, pageStyle, topStyle, descStyle, titleStyle, statisticsStyle };
