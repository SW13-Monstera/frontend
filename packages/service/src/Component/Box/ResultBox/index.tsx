import { COLOR } from '../../../constants/color';
import { OIcon } from '../../../Icon/OIcon';
import { XIcon } from '../../../Icon/XIcon';
import { MyScoreBox } from '../MyScoreBox';
import { gradeResultScoredStyle, gradeResultTextStyle, resultWrapperStyle } from './style.css';

interface IResultBox {
  isCorrect: boolean;
  score: number;
  onClick: () => void;
  isStandardAnswer?: boolean;
  text: string;
}

export const ResultBox = ({
  isCorrect,
  score,
  onClick,
  text,
  isStandardAnswer = false,
}: IResultBox) => {
  return (
    <button className={resultWrapperStyle} onClick={onClick}>
      <MyScoreBox score={score} />
      {isStandardAnswer ? (
        <div className={gradeResultScoredStyle.shown}>
          <div className={gradeResultTextStyle}>{text}</div>
        </div>
      ) : isCorrect ? (
        <div className={gradeResultScoredStyle.correct}>
          <OIcon fill={COLOR.CORRECT} width='1.5rem' height='1.5rem' />
          <div className={gradeResultTextStyle}>{text}</div>
        </div>
      ) : (
        <div className={gradeResultScoredStyle.wrong}>
          <XIcon fill={COLOR.ERROR} width='1.5rem' height='1.5rem' />
          <div className={gradeResultTextStyle}>{text}</div>
        </div>
      )}
    </button>
  );
};
