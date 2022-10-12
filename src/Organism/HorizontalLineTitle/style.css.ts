import { style } from '@vanilla-extract/css';

export const horizontalLineTitleStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  margin: '1rem 0',
});

export const horizontalLineTitleTextStyle = style({
  width: 'fit-content',
  whiteSpace: 'nowrap',
});
