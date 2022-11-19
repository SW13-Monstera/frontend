import { style } from '@vanilla-extract/css';

export const pageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem',
});

export const pageContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const titleWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contentWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const contentElementWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const numberStyle = style({
  fontSize: '10rem',
});

export const contentElementTextWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const contentTitleStyle = style({
  fontWeight: '500',
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
});

export const contentTextStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.25rem',
  wordBreak: 'break-all',
});
