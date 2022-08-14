import { style } from '@vanilla-extract/css';
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

export const descriptionStyle = style([
  baseFontStyle.medium,
  {
    padding: '3rem',
    textAlign: 'center',
  },
]);

export const statisticsWrapperStyle = style([
  {
    display: 'flex',
    gap: '2rem',
  },
]);

export const problemListTitleStyle = style([
  baseFontStyle.large,
  {
    padding: '2rem',
  },
]);

export const problemListWrapperStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
});
