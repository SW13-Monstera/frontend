import { style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

export const horizontalLineStyle = style({
  width: '14.875rem',
  borderTop: `solid 1px ${COLOR.GRAY}`,
});
