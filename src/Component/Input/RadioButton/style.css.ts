import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const radioButtonWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
  cursor: 'pointer',
});

export const labelTextStyle = style({
  maxWidth: '90%',
  wordWrap: 'break-word',
});

export const radioButtonStyle = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  backgroundColor: COLOR.LINE.e,
  margin: '0',

  font: 'inherit',
  color: COLOR.LINE.e,
  width: '1.25rem',
  height: '1.25rem',
  border: '2px solid currentColor',
  borderRadius: '50%',

  display: 'grid',
  placeContent: 'center',

  cursor: 'pointer',

  transition: '100ms ease-in-out',
  transitionProperty: 'background-color, color',

  ':checked': {
    backgroundColor: COLOR.PRIMARY,
    color: COLOR.PRIMARY,
  },
  '::before': {
    content: '',
    width: '0.45em',
    height: '0.45em',
    borderRadius: '50%',
    backgroundColor: COLOR.LINE.e,
  },
});
