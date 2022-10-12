import { themeColors } from './../../../styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const keywordBoxStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.5rem 1rem',

  width: 'fit-content',
  minWidth: '5.5rem',
  height: '2.4375rem',

  color: themeColors.text[5],
  background: themeColors.background.FF,
  border: `1px solid ${themeColors.line.d}`,
  borderRadius: '8px',

  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.4375rem',
  textAlign: 'center',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  cursor: 'default',
});

export const keywordIncludedStyle = styleVariants({
  true: [
    keywordBoxStyle,
    {
      background: COLOR.BACKGROUND.LIGHT_BLUE,
      border: `2px solid ${COLOR.PRIMARY}`,
      color: COLOR.PRIMARY,
    },
  ],
  false: [keywordBoxStyle],
});
