import { IProblem } from '../../types/problem';
import TagBox from '../../Component/Box/TagBox';
import { descStyle, problemDetailStyle, titleTagStyle, topStyle } from './style.css';
import baseFontStyle from '../../styles/font.css';
import { getTagById } from '../../utils/getTagbyId';
import { isNumberNotEmpty } from '../../utils/isNumberNotEmpty';

interface IProblemDetail {
  totalSolved: string;
  avgScore: string;
  topScore: string;
  bottomScore: string;
  correctCnt: string;
  wrongCnt: string;
}

const problemDetailMap: Record<keyof IProblemDetail, (num: number | undefined) => string | null> = {
  totalSolved: (num: number | undefined) => (isNumberNotEmpty(num) ? `제출: ${num}회` : null),
  avgScore: (num: number | undefined) =>
    isNumberNotEmpty(num) ? `평균 점수: ${num!.toFixed(2)}점` : null,
  topScore: (num: number | undefined) =>
    isNumberNotEmpty(num) ? `최고 점수: ${num!.toFixed(2)}점` : null,
  bottomScore: (num: number | undefined) =>
    isNumberNotEmpty(num) ? `최저 점수: ${num!.toFixed(2)}점` : null,
  correctCnt: (num: number | undefined) =>
    isNumberNotEmpty(num) ? `맞은 사람 수: ${num}명` : null,
  wrongCnt: (num: number | undefined) => (isNumberNotEmpty(num) ? `틀린 사람 수: ${num}명` : null),
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
          {Object.entries(props).map(([propKey, propValue]) =>
            Object.entries(problemDetailMap).map(([detailKey, detailValue]) =>
              propKey === detailKey && isNumberNotEmpty(propValue) ? (
                <span key={propKey}>{detailValue(propValue)}</span>
              ) : (
                ''
              ),
            ),
          )}
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
