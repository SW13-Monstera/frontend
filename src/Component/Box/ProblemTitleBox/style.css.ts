import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const problemTitleBoxBaseStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '9rem',
  height: '2rem',

  padding: '0 1rem',
  borderRadius: '24px',
});

export const problemTitleBoxStyle = styleVariants({
  long: [
    problemTitleBoxBaseStyle,
    { color: COLOR.PURPLE, backgroundColor: COLOR.BACKGROUND.PURPLE },
  ],
  short: [
    problemTitleBoxBaseStyle,
    { color: COLOR.ORANGE, backgroundColor: COLOR.BACKGROUND.ORANGE },
  ],
  multiple: [
    problemTitleBoxBaseStyle,
    { color: COLOR.GREEN, backgroundColor: COLOR.BACKGROUND.GREEN },
  ],
});

export const textStyle = style({
  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '1.125rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
