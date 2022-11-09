import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  position: 'sticky',
  left: '0px',
  top: '0px',

  width: '100%',
  height: 'auto',

  backgroundColor: themeColors.background.FF,
  borderBottom: `1px solid ${themeColors.line.e}`,

  zIndex: 999,
});

export const leftSideWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const defaultHeaderStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': { 'screen and (max-width: 720px)': { display: 'none' } },
});

export const menuStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  gap: '.5rem',
  padding: '.5rem',
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

export const headerButtonListStyle = style({
  gap: '.5rem',
});
