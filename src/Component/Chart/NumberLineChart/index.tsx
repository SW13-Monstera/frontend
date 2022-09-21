import { CSSProperties } from 'react';
import { COLOR } from '../../../constants/color';
import { formatNumber } from '../../../utils/formatNumber';
import { SpeechBubbleBox } from '../../Box/SpeechBubbleBox';
import {
  numberCircleMarkColorStyle,
  numberCircleMarkSpeechBubble,
  numberCircleMarkWrapper,
  numberCirleMarkContentStyle,
  numberLineValueWrapperStyle,
  numberLineWrapperStyle,
} from './style.css';

interface INumberLineChart {
  max?: number;
  min?: number;
  myScore: number | undefined;
  avgScore: number | undefined;
}

interface INumberCircleMark {
  score: number | undefined;
  style: CSSProperties | undefined;
  compareToAverage: 'bigger' | 'same' | 'smaller';
  color: string;
  className?: string;
}

interface INumberMark {
  score: number | undefined;
  max: number;
  avg: number | undefined;
  color: string;
  className?: string;
}

const NumberCircleMark = ({
  color,
  score,
  compareToAverage,
  className,
  style,
}: INumberCircleMark) => {
  return (
    <div className={`${numberCircleMarkWrapper} ${className}`} style={style}>
      <div className={numberCircleMarkSpeechBubble}>
        <SpeechBubbleBox color={color}>{`내점수 ${formatNumber(score)}점`}</SpeechBubbleBox>
      </div>
      <div className={numberCircleMarkColorStyle[compareToAverage]}></div>
    </div>
  );
};

const NumberMark = ({ score = 0, max, avg = 0, color }: INumberMark) => {
  return (
    <NumberCircleMark
      score={score}
      style={{ left: `${(score ?? 0 / max) * 10}%` }}
      compareToAverage={score > avg ? 'bigger' : score === avg ? 'same' : 'smaller'}
      color={color}
      className={numberCirleMarkContentStyle}
    />
  );
};

export const NumberLineChart = ({ myScore, avgScore, max = 10, min = 0 }: INumberLineChart) => {
  return (
    <div>
      <div className={numberLineValueWrapperStyle}>
        <div>{min}점</div>
        <div>{max}점</div>
      </div>
      <div className={numberLineWrapperStyle}>
        <NumberMark score={myScore} max={max} avg={avgScore} color={COLOR.PRIMARY} />
        <NumberMark score={avgScore} max={max} avg={avgScore} color={COLOR.GRAY} />
      </div>
    </div>
  );
};
