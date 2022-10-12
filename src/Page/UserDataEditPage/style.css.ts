import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem',
});

export const pageTitleStyle = style({
  fontWeight: '700',
  fontSize: '2.25rem',
  lineHeight: '3.25rem',
  color: themeColors.text[1],
  marginBottom: '3rem',
});

export const formWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '2rem',

  width: '31.25rem',
});

export const urlWrapperStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '.3rem',

    width: '100%',
    height: '4rem',

    padding: '1rem',

    border: '1px solid',
    borderColor: COLOR.GRAY,
    borderRadius: '10px',
  },
]);

export const urlPrefixStyle = style({
  color: COLOR.GRAY,
  cursor: 'default',
});

export const urlInputStyle = style([
  baseFontStyle.small,
  {
    width: '100%',
    height: '100%',
    backgroundColor: themeColors.background.F3,
    color: themeColors.text[1],
    borderRadius: '8px',
    paddingLeft: '.5rem',
  },
]);
