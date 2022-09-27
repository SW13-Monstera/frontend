import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
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

export const skeletonContentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '50vh',
  border: '1px solid #DDDDDD',
  borderRadius: '8px',

  '@media': {
    'screen and (max-width: 1100px)': {
      flexDirection: 'column',
      height: '100%',
    },
  },
});

export const topStyle = style({
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
  padding: '0.5rem',
});

export const lineStyle = style({
  height: '1rem',
  backgroundColor: COLOR.GRAY,
  borderRadius: '8px',
});

export const lineLengthStyle = styleVariants({
  default: [lineStyle, { width: '100%' }],
  last: [lineStyle, { width: '45%' }],
});

export const textButtonStyle = style({
  backgroundColor: COLOR.GRAY,
  borderRadius: vars.border.radius,
});

export const descStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '1rem',

  width: '100%',
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

export const skeletonContentWrapperStyle = style({
  width: '100%',
  height: '100%',
  backgroundColor: themeColors.background.FF,
});

export const skeletonScoreStyle = style({
  width: '2rem',
  height: '2rem',
  backgroundColor: COLOR.GRAY,
  borderRadius: '8px',
});
