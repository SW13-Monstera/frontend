import { IProblem } from '../../../types/problem';
import TagBox from '../../Box/TagBox';
import { descStyle, statisticsStyle, titleStyle, titleTagStyle, topStyle } from './style.css';

function ProblemTitle({
  title,
  tagList,
  numberSolved,
  averageScore,
  highestScore,
  lowestScore,
}: IProblem) {
  return (
    <div className={topStyle}>
      <div className={descStyle}>
        <div className={titleTagStyle}>
          <h1 className={titleStyle}>{title}</h1>
          <ul>
            {tagList.map((tagName) => (
              <TagBox name={tagName} key={tagName} />
            ))}
          </ul>
        </div>
        <div className={statisticsStyle}>
          {`제출 : ${numberSolved}, 평균 점수 : ${averageScore}점, 최고점 : ${highestScore}점 , 최저점 : ${lowestScore}점`}
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
