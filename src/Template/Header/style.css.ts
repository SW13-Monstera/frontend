import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const headerStyle = style([
  baseFontStyle.title,
  {
    boxSizing: 'border-box',

    position: 'sticky',
    left: '0px',
    top: '0px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: '10%',
    paddingTop: '1rem',

    color: COLOR.WHITE,
    backgroundColor: COLOR.TITLEACTIVE,
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
