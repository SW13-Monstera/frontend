import { scoreLabelStyle, scoreStyle, scoreValueStyle } from './style.css';

interface IMyScoreBox {
  score: number | undefined;
  className?: string;
}

export const MyScoreBox = ({ score, className }: IMyScoreBox) => {
  return score !== null && score !== undefined ? (
    <div className={`${scoreStyle} ${className}`}>
      <div className={scoreLabelStyle}>내 점수</div>
      <div className={scoreValueStyle}>{score}점</div>
    </div>
  ) : (
    <></>
  );
};
