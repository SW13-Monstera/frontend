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

const problemDetails: Record<keyof IProblemDetail, string> = {
  totalSolved: 'totalSolved',
  avgScore: 'avgScore',
  topScore: 'topScore',
  bottomScore: 'bottomScore',
  correctCnt: 'correctCnt',
  wrongCnt: 'wrongCnt',
};

const problemDetailMap: Record<keyof IProblemDetail, (num: number | undefined) => string | null> = {
  totalSolved: (num: number | undefined) => (num ? `제출: ${num}회` : null),
  avgScore: (num: number | undefined) => (num ? `평균 점수: ${num.toFixed(2)}점` : null),
  topScore: (num: number | undefined) => (num ? `최고 점수: ${num.toFixed(2)}점` : null),
  bottomScore: (num: number | undefined) => (num ? `최저 점수: ${num.toFixed(2)}점` : null),
  correctCnt: (num: number | undefined) => (num ? `맞은 사람 수: ${num}명` : null),
  wrongCnt: (num: number | undefined) => (num ? `틀린 사람 수: ${num}명` : null),
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
          {Object.entries(props)
            .filter((e) => Object.keys(problemDetailMap).includes(e[0]) && e[1])
            .map((e) => (
              <div key={`${e[0]}${e[1]}`}>
                {Object.entries(problemDetailMap).map(([key, value]) =>
                  key === e[0] ? <span key={e[0]}>{value(e[1])}</span> : '',
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
