import { skeletonKeyframeAnimation } from './skeletonKeyframeAnimation.css';
import { descStyle, problemDetailStyle, topStyle, titleStyle } from './style.css';

export const SkeletonProblemTitle = () => {
  return (
    <div className={topStyle}>
      <div className={descStyle}>
        <div className={`${titleStyle} ${skeletonKeyframeAnimation}`}></div>
        <div className={`${problemDetailStyle} ${skeletonKeyframeAnimation}`}></div>
      </div>
    </div>
  );
};
