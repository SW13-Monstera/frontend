import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const problemListButtonBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
  textAlign: 'center',
  width: 'fit-content',
  height: '2.5rem',

  borderRadius: '8px',
  padding: '0.5rem 1.2rem',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.25rem',

  whiteSpace: 'nowrap',
  ':hover': { filter: 'brightness(90%)' },
});

export const problemListButtonPrimaryStyle = styleVariants({
  light: [problemListButtonBaseStyle, { color: COLOR.WHITE, backgroundColor: COLOR.DARK[1] }],
  dark: [problemListButtonBaseStyle, { color: COLOR.WHITE, backgroundColor: COLOR.PRIMARY }],
});

export const problemListButtonSecondaryStyle = styleVariants({
  light: [
    problemListButtonBaseStyle,
    { color: COLOR.TEXT[1], border: `1px solid ${COLOR.LINE.c}` },
  ],
  dark: [problemListButtonBaseStyle, { color: COLOR.LINE.c, border: `1px solid ${COLOR.LINE.c}` }],
});

export const mobileNotShownStyle = style({
  '@media': { 'screen and (max-width: 850px)': { display: 'none' } },
});
