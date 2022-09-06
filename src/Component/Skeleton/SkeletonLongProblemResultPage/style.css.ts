import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../../Button/theme.css';

export const pageStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '1.5rem',

  width: '100%',
  padding: '3rem',
});

export const topStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0.5rem',
});

export const line1Style = style({
  width: '10rem',
  height: '2.5rem',
  backgroundColor: COLOR.GRAY,
});

export const line2Style = style({
  width: '12rem',
  height: '2.5rem',
  backgroundColor: COLOR.GRAY,
});

export const line3Style = style({
  width: '15rem',
  height: '2.5rem',
  backgroundColor: COLOR.GRAY,
});

export const textButtonStyle = style({
  backgroundColor: COLOR.GRAY,
  borderRadius: vars.border.radius,
});

export const descStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',

  width: '10rem',
});

export const titleStyle = style({
  width: '15rem',
  height: '3rem',
});

export const titleTagStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const tagListStyle = style({
  display: 'flex',
});

export const problemDetailStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    gap: '1rem',

    width: '25rem',
    height: '1.75rem',
  },
]);

export const skeletonScoreStyle = style({
  width: '2rem',
  height: '5rem',
});
