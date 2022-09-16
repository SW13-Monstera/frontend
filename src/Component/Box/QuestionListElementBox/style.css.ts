import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const textBoxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '.625rem',

  width: '100%',
  height: '100%',
  padding: '1rem 1.5rem',

  color: themeColors.text[1],
  background: themeColors.background.FF,
  boxShadow: `0px 0px 4px ${themeColors.shadow}`,
  borderRadius: '8px',
});

export const textBoxMainStyle = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    },
  },
});

export const detailWrapperStyle = style([
  baseFontStyle.xsmall,
  {
    '@media': { 'screen and (max-width: 600px)': { display: 'none' } },
  },
]);

export const titleStyle = style({
  fontWeight: '700',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: themeColors.text[1],
});

export const detailStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.25rem',
});

export const detailLabelStyle = style({
  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '1.125rem',
  color: themeColors.text[9],
});

export const detailValueStyle = style({
  fontWeight: '900',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  color: themeColors.text[2],
});

export const tagListStyle = style({ display: 'flex', gap: '0.125rem' });

export const problemStatisticsWrapperStyle = style({
  gap: '7.8125rem',
});
