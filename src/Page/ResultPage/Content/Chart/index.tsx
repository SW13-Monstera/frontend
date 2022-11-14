import { NumberLineChart } from '../../../../Component/Chart/NumberLineChart';
import { ILongProblemResult } from '../../../../types/problem';
import {
  numberLineChartStrongTitleStyle,
  numberLineChartTitleStyle,
  numberLineChartWrapperStyle,
} from '../../style.css';

export const ChartContent = ({ result }: ILongProblemResult) => (
  <div className={numberLineChartWrapperStyle}>
    <div className={numberLineChartTitleStyle}>
      나는 <strong className={numberLineChartStrongTitleStyle}>평균 중 몇점</strong>일까?
    </div>
    <NumberLineChart myScore={result?.score} avgScore={result?.avgScore} />
  </div>
);
