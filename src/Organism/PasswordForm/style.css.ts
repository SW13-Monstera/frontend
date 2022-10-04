import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../styles/font.css';
import { themeColors } from '../../styles/theme.css';

export const titleStyle = style([
  baseFontStyle.title,
  {
    textAlign: 'center',
    color: themeColors.text[1],
  },
]);
