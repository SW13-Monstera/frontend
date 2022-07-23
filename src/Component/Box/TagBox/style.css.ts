import { style } from '@vanilla-extract/css';

export const tagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '56px',
  height: '24px',

  color: 'black',
  background: '#fff1cd',
  borderRadius: '10px',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.5rem',

  textAlign: 'center',

  padding: '0.0313rem',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '56px',
      height: '20px',
    },
  },
});
