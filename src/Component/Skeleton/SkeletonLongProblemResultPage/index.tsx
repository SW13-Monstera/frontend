import {
  descStyle,
  problemDetailStyle,
  topStyle,
  line1Style,
  line2Style,
  line3Style,
  textButtonStyle,
  titleStyle,
  skeletonScoreStyle,
} from './style.css';
import { skeletonKeyframeAnimation } from '../skeletonKeyframeAnimation.css';
import { TextBox } from '../../Box';
import {
  buttonListStyle,
  contentStyle,
  pageContentStyle,
  pageStyle,
  scoreStyle,
  scoreWrapperStyle,
  subtitleStyle,
} from '../../../Page/ResultPage/style.css';
import { Header } from '../../../Template';
import { textButtonSizeStyle } from '../../Button/TextButton/style.css';
import { buttonThemeClass } from '../../Button/theme.css';

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
      <div className={`${line1Style} ${skeletonKeyframeAnimation}`}></div>
      <div className={`${line2Style} ${skeletonKeyframeAnimation}`}></div>
      <div className={`${line1Style} ${skeletonKeyframeAnimation}`}></div>
      <div className={`${line2Style} ${skeletonKeyframeAnimation}`}></div>
      <div className={`${line3Style} ${skeletonKeyframeAnimation}`}></div>
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

export const SkeletonLongProblemResultPage = () => {
  return (
    <>
      <Header />
      <div className={pageStyle}>
        <SkeletonProblemTitle />
        <div className={pageContentStyle}>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <SkeletonMultipleText />
            </div>
          </TextBox>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <SkeletonMultipleText />
            </div>
          </TextBox>
        </div>
        <div className={buttonListStyle}>
          <div className={scoreWrapperStyle}>
            <div>내 점수:</div>
            <div className={`${scoreStyle} ${skeletonScoreStyle}`}></div>
          </div>
          <SkeletonTextButton />
          <SkeletonTextButton />
        </div>
      </div>
    </>
  );
};
