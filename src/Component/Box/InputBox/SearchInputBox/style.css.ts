import { style } from '@vanilla-extract/css';

export const searchInputBoxStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '0.5rem',

  width: '100%',
  height: '4.375rem',

  border: '0.0625rem solid #d9d9d9',
  borderRadius: '0.625rem',

  padding: '0 1.25rem',
});

export const inputTextBoxStyle = style({
  width: '100%',
  border: 'none',
});

export const searchButtonStyle = style({ width: '100%', cursor: 'pointer' });
