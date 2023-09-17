import { style } from '@vanilla-extract/css';

export const floatingButtonStyle = style({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  WebkitBoxPack: 'center',
  justifyContent: 'center',
  width: '56px',
  height: '56px',
  cursor: 'pointer',
  borderRadius: '24px',
  transition: 'visibility 400ms ease 0s',
  background: 'linear-gradient(rgb(104, 97, 236) 0%, rgb(127, 97, 236) 100%)',
  boxShadow:
    'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0,0)',
});
