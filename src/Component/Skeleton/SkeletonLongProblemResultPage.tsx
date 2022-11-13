import { skeletonContentStyle, skeletonContentWrapperStyle } from './style.css';
import {
  buttonListStyle,
  contentStyle,
  pageStyle,
  subtitleStyle,
} from '../../Page/ResultPage/style.css';
import { ILongProblemResultLocationState } from '../../types/problem';
import ProblemTitle from '../../Organism/ProblemTitle';
import { SkeletonMultipleText } from './SkeletonMultipleText';
import { SkeletonTextButton } from './SkeletonTextButton';

export const SkeletonLongProblemResultPage = ({
  title,
  userAnswer,
}: ILongProblemResultLocationState) => {
  return (
    <>
      <div className={pageStyle}>
        <ProblemTitle title={title} id={''} tags={[]} isSolved={true} />
        <div className={skeletonContentStyle}>
          <div className={skeletonContentWrapperStyle}>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <div>{userAnswer}</div>
            </div>
          </div>
          <div className={skeletonContentWrapperStyle}>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <SkeletonMultipleText />
            </div>
          </div>
        </div>
        <div className={buttonListStyle}>
          <SkeletonTextButton />
          <SkeletonTextButton />
        </div>
      </div>
    </>
  );
};
