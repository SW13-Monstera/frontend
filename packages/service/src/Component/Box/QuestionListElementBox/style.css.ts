import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';
import { spreadBoxShadow } from '../../../styles/keyframe.css';

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
  background: themeColors.background.FFLight,
  boxShadow: `0px 0px 4px ${themeColors.shadow[1]}`,
  borderRadius: '8px',
  transition: 'box-shadow .3s',
  animation: spreadBoxShadow,

  ':hover': {
    boxShadow: `4px 8px 24px  ${themeColors.shadow[1]}`,
  },
});

export const textBoxMainStyle = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    'screen and (max-width: 600px)': {
      alignItems: 'start',
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
  height: '2.5rem',
  fontWeight: '700',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
  color: themeColors.text[1],
  margin: '1rem 0',
});

export const dividerStyle = style({
  '@media': { 'screen and (max-width: 600px)': { display: 'none' } },
});

export const detailStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
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

export const tagListStyle = style({ display: 'flex', gap: '.5rem' });

export const problemStatisticsWrapperBaseStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
});

export const problemStatisticsWrapperStyle = styleVariants({
  row: [problemStatisticsWrapperBaseStyle, { width: '100%', gap: '6rem' }],
  column: [problemStatisticsWrapperBaseStyle, { flexDirection: 'column', gap: '1.5rem' }],
});
