import { style } from '@vanilla-extract/css';
import { themeColors } from '../../../styles/theme.css';

export const oauthJoinWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const dividerStyle = style({
  borderColor: themeColors.line.e,
});

export const oauthJoinTitleStyle = style({
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.4375rem',

  color: '#777777',
  alignSelf: 'center',

  padding: '1rem 0 0 0',
});
