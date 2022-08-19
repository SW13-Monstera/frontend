import { IProblem } from '../../types/problem';
import TagBox from '../../Component/Box/TagBox';
import { descStyle, problemDetailStyle, titleTagStyle, topStyle } from './style.css';
import baseFontStyle from '../../styles/font.css';
import { getTagById } from '../../utils/getTagbyId';

interface IProblemDetail {
  totalSolved: string;
  avgScore: string;
  topScore: string;
  bottomScore: string;
  correctCnt: string;
  wrongCnt: string;
}

const problemDetailMap: Record<keyof IProblemDetail, (value: number | undefined) => string> = {
  totalSolved: (value: number | undefined) => (value ? `제출: ${value}회` : ''),
  avgScore: (value: number | undefined) => (value ? `평균 점수: ${value.toFixed(2)}점` : ''),
  topScore: (value: number | undefined) => (value ? `최고 점수: ${value.toFixed(2)}점` : ''),
  bottomScore: (value: number | undefined) => (value ? `최저 점수: ${value.toFixed(2)}점` : ''),
  correctCnt: (value: number | undefined) => (value ? `맞은 사람 수: ${value}명` : ''),
  wrongCnt: (value: number | undefined) => (value ? `틀린 사람 수: ${value}명` : ''),
};

function ProblemTitle(props: IProblem) {
  return (
    <div className={topStyle}>
      <div className={descStyle}>
        <div className={titleTagStyle}>
          <h1 className={baseFontStyle.title}>{props.title}</h1>
          <ul>
            {props.tags.map((tagId) => {
              const { name, color } = getTagById(tagId);
              return <TagBox name={name} color={color} key={tagId} />;
            })}
          </ul>
        </div>
        <div className={problemDetailStyle}>
          <div>{problemDetailMap.totalSolved(props.totalSolved)}</div>
          <div>{problemDetailMap.avgScore(props.avgScore)}</div>
          <div>{problemDetailMap.topScore(props.topScore)}</div>
          <div>{problemDetailMap.bottomScore(props.bottomScore)}</div>
          <div>{problemDetailMap.correctCnt(props.correctCnt)}</div>
          <div>{problemDetailMap.wrongCnt(props.wrongCnt)}</div>
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
