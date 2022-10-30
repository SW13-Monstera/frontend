import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.875rem',

  padding: '4rem 0',
});

export const titleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '1.125rem',
  textAlign: 'center',
  color: themeColors.text[1],
});

export const inputListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.4375rem',
  color: themeColors.text[5],
});

export const oauthJoinWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const oauthJoinStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.625rem',

    textAlign: 'center',
  },
]);

export const horizontalLineStyle = style({
  width: '14.875rem',
  borderTop: `solid 1px ${COLOR.GRAY}`,
});

export const oauthButtonListStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const noticeStyle = style({
  fontWeight: '400',
  fontSize: '0.9375rem',
  lineHeight: '1.375rem',
  color: COLOR.TEXT[7],
});

export const linkStyle = style({
  textDecoration: 'underline',
});

export const dividerStyle = style({
  borderColor: themeColors.line.e,
});

export const oauthJoinTitleStyle = style({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '23px',

  color: '#777777',
  alignSelf: 'center',

  padding: '1rem 0 0 0',
});
