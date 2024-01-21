import { themeColors } from './../../../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../../../constants/color';

export const mainWrap = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  gap: '0.5rem',
});

export const profileWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  color: themeColors.text[1],
});

export const profileLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',

  ':hover': {
    color: themeColors.text[3],
  },
});

export const profileImageWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  backgroundColor: themeColors.background.F3,
});

export const profileImage = style({
  width: '2rem',
  height: '2rem',
  fill: COLOR.WHITE,
});

export const mainUserName = style({
  fontSize: '0.9rem',
  fontWeight: 400,
  lineHeight: '1rem',
});

export const likeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  marginTop: '0.5rem',
  color: 'inherit',
});

export const thumbUpIcon = style({
  width: '20px',
  height: '20px',
});

export const rightWrap = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const contentWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '1rem',
  borderBottom: `1px solid ${themeColors.line.d}`,
  fontSize: '1.1rem',
  fontWeight: 400,
  lineHeight: '1.75rem',
});

export const commentListWrap = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  fontSize: '0.9rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
});

export const userName = style({
  color: COLOR.PRIMARY,
});

export const dateTime = style({
  color: themeColors.text[9],
});

export const addCommentButton = style({
  width: 'fit-content',
  marginTop: '0.75rem',
  color: themeColors.text[9],
  fontSize: '0.9rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
  textDecoration: 'underline',
  ':hover': {
    color: themeColors.text[5],
  },
});
