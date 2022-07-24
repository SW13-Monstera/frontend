import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';

export const headerStyle = style([
  baseFontStyle.title,
  {
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: '10%',

    color: '#ffffff',
    backgroundColor: 'black',
  },
]);

export const navStyle = style([
  baseFontStyle.large,
  {
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2.5rem',
  },
]);

export const menuStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  gap: '1rem',

  width: '10%',
  padding: '1rem',
});

export const iconButtonStyle = style({
  width: '2rem',
  height: '2rem',
  fill: 'white',
  stroke: 'white',
});

export const logoStyle = style({ width: '12rem', padding: '2rem' });
