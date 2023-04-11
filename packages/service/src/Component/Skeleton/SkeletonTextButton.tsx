import { textButtonStyle } from './style.css';
import { skeletonKeyframeAnimation } from './skeletonKeyframeAnimation.css';
import { buttonThemeClass } from '../Button/theme.css';
import { textButtonSizeStyle } from '../Button/TextButton/style.css';

export const SkeletonTextButton = () => {
  return (
    <div
      className={`${buttonThemeClass} ${textButtonStyle} ${textButtonSizeStyle.medium} ${skeletonKeyframeAnimation}`}
    ></div>
  );
};
