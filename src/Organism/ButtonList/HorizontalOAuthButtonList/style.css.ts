import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
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

    color: COLOR.GRAY,

    textAlign: 'center',
  },
]);
