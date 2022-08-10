import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const asideStyle = style({
  boxSizing: 'border-box',
  position: 'fixed',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  width: '15.625rem',
  height: '12.5rem',

  padding: '1rem 0 0 1rem',
});

export const filterStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',

  width: '100%',
  height: 'fit-content',

  background: COLOR.OFFWHITE,
  border: `1px solid ${COLOR.GRAY}`,
  borderRadius: '10px',

  padding: '1.25rem',
});

export const filterTitleStyle = style([
  baseFontStyle.medium,
  {
    color: COLOR.TITLEACTIVE,
  },
]);

export const dropdownListStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.625rem',
});

export const checkedTagListStyle = style({
  boxSizing: 'border-box',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
  gridGap: '0.2rem',

  width: '100%',

  justifyItems: 'center',
});

export const questionListStyle = style({
  boxSizing: 'border-box',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',

  width: '65%',
  marginLeft: '18.75rem',

  '@media': {
    'screen and (max-width: 1600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
