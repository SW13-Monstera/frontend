import { formatNumber } from '../../../utils/formatNumber';
import { SpeechBubbleBox } from '../../Box/SpeechBubbleBox';
import {
  numberCircleMarkColorStyle,
  numberCircleMarkSpeechBubble,
  numberCircleMarkWrapper,
  numberLineValueWrapperStyle,
  numberLineWrapperStyle,
  numberMarkTextLabelStyle,
  numberMarkTextStyle,
  speechBubbleTextWrapperStyle,
} from './style.css';

interface INumberLineChart {
  max?: number;
  min?: number;
  myScore: number | undefined;
  avgScore: number | undefined;
}

interface INumberMark {
  score: number;
  averageScore: number;
  className?: string;
  isAverage?: boolean;
  maxScore: number;
}

const NumberMark = ({
  score = 0,
  averageScore = 0,
  maxScore = 0,
  className,
  isAverage = false,
}: INumberMark) => {
  const style = { left: `${(score ?? 0 / maxScore) * 10}%` };
  const compareToAverage =
    score > averageScore ? 'bigger' : score === averageScore ? 'same' : 'smaller';
  return (
    <div className={`${numberCircleMarkWrapper} ${className}`} style={style}>
      <div className={numberCircleMarkSpeechBubble}>
        <SpeechBubbleBox compareToAverage={compareToAverage}>
          <p className={speechBubbleTextWrapperStyle}>
            {isAverage ? (
              <>
                <span className={numberMarkTextLabelStyle[compareToAverage]}>{`평균점수 `}</span>
                <span className={numberMarkTextStyle}>{`${formatNumber(score)}점`}</span>
              </>
            ) : (
              <>
                <span className={numberMarkTextLabelStyle[compareToAverage]}>{`내점수 `}</span>
                <span className={numberMarkTextStyle}>{`${formatNumber(score)}점`}</span>
              </>
            )}
          </p>
        </SpeechBubbleBox>
      </div>
      <div className={numberCircleMarkColorStyle[compareToAverage]}></div>
    </div>
  );
};

export const NumberLineChart = ({ myScore, avgScore, max = 5, min = 0 }: INumberLineChart) => {
  return (
    <div>
      <div className={numberLineWrapperStyle}>
        <NumberMark score={myScore ?? 0} maxScore={max} averageScore={avgScore ?? 0} />
        <NumberMark
          score={avgScore ?? 0}
          maxScore={max}
          averageScore={avgScore ?? 0}
          isAverage={true}
        />
      </div>
      <div className={numberLineValueWrapperStyle}>
        <div>{min}점</div>
        <div>{max}점</div>
      </div>
    </div>
  );
};
