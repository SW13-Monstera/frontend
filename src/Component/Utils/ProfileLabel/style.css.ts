import { style } from '@vanilla-extract/css';
import { COLOR } from '../../../constants/color';
import baseFontStyle from '../../../styles/font.css';

export const profileLabelStyle = style([
  baseFontStyle.medium,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '2rem',
  },
]);

export const nameStyle = style({
  color: COLOR.GRAY,
});

export const valueStyle = style({
  color: COLOR.TITLEACTIVE,
});
