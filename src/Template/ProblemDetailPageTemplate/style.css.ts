import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../Page/QuestionDetailPage/baseStyle.css';

const spread = keyframes({
  '0%': { backgroundColor: 'inherit' },
  '100%': { backgroundColor: vars.backgroundColor },
});

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',

  width: '100%',

  color: vars.textColor,
  backgroundColor: vars.backgroundColor,

  transition: 'background-color 0.2s',
  animation: spread,
  padding: '3rem',
});

export const topStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const titleTagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const questionContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '60vh',
  background: vars.contentBackgroundColor,
  borderRadius: '10px',
});

export const buttonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  gap: '1rem',
});
