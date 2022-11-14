import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const contentTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.5rem',
  lineHeight: '2.1875rem',

  color: themeColors.text[2],
});

export const answerInputContentStyle = style({
  display: 'flex',

  width: '100%',
  height: '100%',

  color: themeColors.text[5],
  backgroundColor: themeColors.background.F0,

  borderRadius: '8px',
  padding: '1rem',

  fontWeight: '400',
  fontSize: '1.25rem',
  lineHeight: '1.8125rem',
});

export const charCntWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  gap: '.5rem',
  alignSelf: 'flex-end',

  color: themeColors.text[5],
});

export const charCntWarningStyle = style({
  color: COLOR.RED,
});
