import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const floatingButtonStyle = style({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '56px',
  height: '56px',
  cursor: 'pointer',
  borderRadius: '24px',
  background: COLOR.PRIMARY,
  color: COLOR.BACKGROUND.ALICE_BLUE,
  fontSize: '2rem',
  boxShadow:
    'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0,0)',
  zIndex: '10',
});
