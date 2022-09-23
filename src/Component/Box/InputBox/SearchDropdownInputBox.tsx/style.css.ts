import { themeColors } from './../../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../../constants/color';

export const searchInputBoxStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '0.5rem',

  width: '31.25rem',
  height: '4.375rem',

  border: '0.0625rem solid #d9d9d9',
  borderRadius: '0.625rem',

  padding: '0 1.25rem',

  cursor: 'pointer',

  color: COLOR.TITLEACTIVE,
  background: COLOR.WHITE,
});

export const inputTextBoxStyle = style({
  width: '100%',
  border: 'none',
});

export const searchButtonStyle = style({ width: '100%' });

export const dropDownContentStyle = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',

  width: '31.25rem',

  padding: '1rem',

  backgroundColor: themeColors.background.FF,
  borderRadius: '20px',

  filter: 'drop-shadow(0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25))',
  zIndex: 1,
});

export const dropDownListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',
});

export const checkedTagListStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '0.1rem',
});

export const tagBoxStyle = style({
  marginBottom: '.5rem',
});
