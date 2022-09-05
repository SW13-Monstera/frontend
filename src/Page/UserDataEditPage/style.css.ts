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

export const formWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',

  width: '31.25rem',
});

export const urlWrapperStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    width: '100%',
    height: '4rem',

    padding: '1rem',

    border: '1px solid',
    borderColor: COLOR.GRAY,
    borderRadius: '10px',
  },
]);

export const urlPrefixStyle = style({});

export const urlInputStyle = style([
  baseFontStyle.small,
  {
    width: '100%',
    height: '100%',
  },
]);
