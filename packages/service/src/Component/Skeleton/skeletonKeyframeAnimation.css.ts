import { keyframes, style } from '@vanilla-extract/css';
import { COLOR } from '../../constants/color';

const skeletonGradientKeyframe = keyframes({
  '0%': { backgroundColor: COLOR.GRAY },
  '50%': { backgroundColor: COLOR.GRAY2 },
  '100%': { backgroundColor: COLOR.GRAY },
});

export const skeletonKeyframeAnimation = style({
  animation: `${skeletonGradientKeyframe} 2s linear infinite`,
});
