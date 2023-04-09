import { themeColors } from './../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';
import baseFontStyle from '../../styles/font.css';

export const pageWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '4.4rem',
});

export const logoTitleStyle = style({
  width: '20rem',
});

export const descriptionStyle = style({
  padding: '3rem',
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: themeColors.text[5],
});

export const statisticsWrapperStyle = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    width: '70%',
    whiteSpace: 'nowrap',
  },
]);

export const problemListWrapperStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 950px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
  },
});

export const problemListTitleStyle = style([
  baseFontStyle.large,
  {
    padding: '2rem',
  },
]);

export const strongDescriptionStyle = style({
  fontWeight: '500',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  color: COLOR.PRIMARY,
});
