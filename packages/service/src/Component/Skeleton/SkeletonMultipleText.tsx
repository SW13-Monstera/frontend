import { skeletonKeyframeAnimation } from './skeletonKeyframeAnimation.css';
import { descStyle, lineLengthStyle } from './style.css';

export const SkeletonMultipleText = () => {
  return (
    <div className={descStyle}>
      {Array(8)
        .fill(0)
        .map((_, idx) => (
          <div
            className={`${lineLengthStyle.default} ${skeletonKeyframeAnimation}`}
            key={idx}
          ></div>
        ))}
      <div className={`${lineLengthStyle.last} ${skeletonKeyframeAnimation}`}></div>
    </div>
  );
};
