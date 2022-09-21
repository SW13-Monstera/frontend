import { themeColors } from './../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const listPageWrapperStyle = style({
  marginBottom: '5rem',
});

export const listPageMainWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1.3125rem',
  padding: '0 5rem',
});

export const asideStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  width: '40%',
  minWidth: '15rem',
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

  background: themeColors.background.F8,
  borderRadius: '8px',

  padding: '1.125rem 1.5rem',
});

export const filterTitleWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  padding: '0 0.5rem',
});

export const filterTitleStyle = style({
  fontWeight: '700',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',

  color: themeColors.text[2],
  whiteSpace: 'nowrap',
});

export const dropdownListStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.625rem',

  width: '100%',
});

export const checkedTagListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',
});

export const checkedTagListTitleStyle = style({
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: themeColors.text[1],
});

export const checkedTagListTitleIsShownStyle = styleVariants({
  true: [checkedTagListTitleStyle],
  false: [checkedTagListTitleStyle, { display: 'none' }],
});

export const checkedTagListStyle = style({
  display: 'flex',
  gap: '.5rem',
  width: '100%',
  overflowX: 'auto',
});

export const questionListWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
});

export const questionListStyle = style({
  boxSizing: 'border-box',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',

  width: '100%',

  paddingTop: '1rem',

  '@media': {
    'screen and (max-width: 1600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});

export const resetButtonTextStyle = style({
  '@media': { 'screen and (max-width: 660px)': { display: 'none' } },
});

export const resetButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.25rem',
  fontWeight: '500',
  fontSize: '.875rem',
  lineHeight: '1.5rem',
  color: COLOR.TEXT[7],
});
