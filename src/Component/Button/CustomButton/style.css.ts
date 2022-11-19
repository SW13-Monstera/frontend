import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const customButtonWrapperStyle = style({
  position: 'relative',
});

export const buttonTagStyle = style({
  position: 'absolute',
  top: '-.7rem',
  right: '-1.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '3rem',
  height: '1.5rem',
  padding: '.5rem',

  border: `1px solid ${COLOR.GREEN}`,
  borderRadius: '12px',
  backgroundColor: COLOR.BACKGROUND.GREEN,
  color: COLOR.GREEN,

  textAlign: 'center',
  fontWeight: '600',
  fontSize: '.75rem',

  zIndex: 1,
});
