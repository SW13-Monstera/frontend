import { style } from '@vanilla-extract/css';

export const wrap = style({
  marginTop: '24px',
});

export const topWrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.75rem',
  fontWeight: 700,
  lineHeight: '2rem',
});

export const buttonWrap = style({
  display: 'flex',
  gap: '8px',
});

export const descriptionWrap = style({
  marginTop: '12px',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '1.5rem',
  whiteSpace: 'pre-wrap',
});
