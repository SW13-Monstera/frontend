import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  position: 'sticky',
  left: '0px',
  top: '0px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: '5rem',

  backgroundColor: themeColors.background.FF,
  borderBottom: `1px solid ${themeColors.line.e}`,

  zIndex: 1,
});

export const leftSideWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const menuStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  gap: '0.016%',

  padding: '1rem',
});

export const iconButtonStyle = style({
  width: '2rem',
  height: '2rem',
  fill: 'white',
  stroke: 'white',
});

export const logoStyle = style({ width: '12rem', padding: '2rem', cursor: 'pointer' });

export const buttonListWrapperBeforeLoginStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.0083%',
});

export const iconButtonListWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.4375rem',
});
