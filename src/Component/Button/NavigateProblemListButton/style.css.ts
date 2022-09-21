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
  color: COLOR.WHITE,

  borderRadius: '8px',
  padding: '0.5rem 1.2rem',
  fontWeight: '700',
  fontSize: '1rem',
  lineHeight: '1.25rem',

  whiteSpace: 'nowrap',
  ':hover': { filter: 'brightness(90%)' },
});

export const problemListButtonStyle = styleVariants({
  light: [problemListButtonBaseStyle, { backgroundColor: COLOR.DARK[1] }],
  dark: [problemListButtonBaseStyle, { backgroundColor: COLOR.PRIMARY }],
});

export const mobileNotShownStyle = style({
  '@media': { 'screen and (max-width: 600px)': { display: 'none' } },
});
