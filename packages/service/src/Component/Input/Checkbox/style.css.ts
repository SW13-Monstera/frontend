import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const checkBoxWrapperStyle = style({
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

export const checkboxStyle = style({
  WebkitAppearance: 'none',
  appearance: 'none',
  backgroundColor: COLOR.LINE.e,
  margin: '0',

  font: 'inherit',
  color: COLOR.LINE.e,
  width: '1.25rem',
  height: '1.25rem',
  border: '2px solid currentColor',
  borderRadius: '2px',

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
    width: '0.55em',
    height: '0.55em',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
    backgroundColor: COLOR.LINE.e,
  },
});
