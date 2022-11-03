import { contentStyle, subtitleStyle } from '../../Page/ResultPage/style.css';
import { CustomSplit } from '../Utils/Split/CustomSplit';
import { SkeletonMultipleText } from './SkeletonMultipleText';
import { SkeletonTextButton } from './SkeletonTextButton';
import { skeletonButtonListWrapperStyle, skeletonContentWrapperStyle } from './style.css';

export const SkeletonProblemSetLongProblemResultPage = () => (
  <>
    <CustomSplit
      leftSideContent={
        <div className={skeletonContentWrapperStyle}>
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>모범 답안</h3>
            <SkeletonMultipleText />
          </div>
        </div>
      }
      rightSideContent={
        <div className={skeletonContentWrapperStyle}>
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>내 답안</h3>
            <SkeletonMultipleText />
          </div>
        </div>
      }
    />
    <div className={skeletonButtonListWrapperStyle}>
      <SkeletonTextButton />
    </div>
  </>
);
