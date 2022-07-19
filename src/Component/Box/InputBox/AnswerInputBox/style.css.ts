import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../../styles/font.css';

export const answerInputStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '40px',
});

export const answerInputTitleStyle = style([
  baseFontStyle.xlarge,
  {
    color: '#000000',
  },
]);

export const answerInputContentStyle = style([
  baseFontStyle.medium,
  {
    width: '80%',
    height: '80%',

    color: '#000000',
  },
]);
