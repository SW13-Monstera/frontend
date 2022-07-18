import { style } from '@vanilla-extract/css';

export const textBoxStyle = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  color: '#000000',
  backgroundColor: '#F5F5F5',
  borderRadius: '10px',

  width: '100%',
  height: '100%',
});
