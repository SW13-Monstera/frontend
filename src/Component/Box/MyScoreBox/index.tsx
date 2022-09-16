import { scoreLabelStyle, scoreStyle, scoreValueStyle } from './style.css';

interface IMyScoreBox {
  score: number;
}

export const MyScoreBox = ({ score }: IMyScoreBox) => {
  return (
    <div className={scoreStyle}>
      <div className={scoreLabelStyle}>내 점수</div>
      <div className={scoreValueStyle}>{score}점</div>
    </div>
  );
};
