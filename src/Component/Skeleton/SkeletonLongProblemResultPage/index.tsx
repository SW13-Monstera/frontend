import {
  descStyle,
  problemDetailStyle,
  topStyle,
  textButtonStyle,
  titleStyle,
  skeletonContentStyle,
  lineLengthStyle,
  skeletonContentWrapperStyle,
} from './style.css';
import { skeletonKeyframeAnimation } from '../skeletonKeyframeAnimation.css';
import {
  buttonListStyle,
  contentStyle,
  pageStyle,
  subtitleStyle,
} from '../../../Page/ResultPage/style.css';
import { PageTemplate } from '../../../Template';
import { textButtonSizeStyle } from '../../Button/TextButton/style.css';
import { buttonThemeClass } from '../../Button/theme.css';
import { ILongProblemResultLocationState } from '../../../types/problem';
import ProblemTitle from '../../../Organism/ProblemTitle';

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

export const SkeletonTextButton = () => {
  return (
    <div
      className={`${buttonThemeClass} ${textButtonStyle} ${textButtonSizeStyle.medium} ${skeletonKeyframeAnimation}`}
    ></div>
  );
};

export const SkeletonLongProblemResultPage = ({
  title,
  userAnswer,
  id,
  tags,
}: ILongProblemResultLocationState) => {
  return (
    <PageTemplate>
      <div className={pageStyle}>
        <ProblemTitle title={title} id={''} tags={[]} isSolved={true} />
        <div className={skeletonContentStyle}>
          <div className={skeletonContentWrapperStyle}>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <div>{userAnswer}</div>
            </div>
          </div>
          <div className={skeletonContentWrapperStyle}>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <SkeletonMultipleText />
            </div>
          </div>
        </div>
        <div className={buttonListStyle}>
          <SkeletonTextButton />
          <SkeletonTextButton />
        </div>
      </div>
    </PageTemplate>
  );
};
