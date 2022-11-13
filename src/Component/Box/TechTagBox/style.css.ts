import { themeColors } from './../../../styles/theme.css';
import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';

export const tagStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'fit-content',
  height: '1.5rem',

  color: themeColors.text[5],
  background: COLOR.BACKGROUND.BLUE,
  borderRadius: '4px',

  textAlign: 'center',

  padding: '0.75rem 0.5rem',

  whiteSpace: 'nowrap',

  fontWeight: '400',
  fontSize: '.875rem',
  lineHeight: '1.5rem',
});
