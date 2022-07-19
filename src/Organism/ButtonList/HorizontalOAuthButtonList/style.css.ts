import { style } from '@vanilla-extract/css';
import baseFontStyle from '../../../styles/font.css';

export const oauthJoinWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const oauthJoinStyle = style([
  baseFontStyle.small,
  {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',

    color: ' #D9D9D9',

    textAlign: 'center',
  },
]);
