import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const horizontalLineStyle = style({
  width: '100%',
  borderTop: `solid 1px ${COLOR.GRAY}`,
});
