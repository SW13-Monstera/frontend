import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';
import { vars } from '../baseStyle.css';

export const contentTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: vars.textColor,
  },
]);

export const answerInputContentStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',

    width: '100%',
    height: '100%',

    color: vars.textColor,
    backgroundColor: vars.backgroundColor,
  },
]);
