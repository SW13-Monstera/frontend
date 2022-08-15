import { IProblem } from '../../types/problem';
import TagBox from '../../Component/Box/TagBox';
import { descStyle, titleTagStyle, topStyle } from './style.css';
import baseFontStyle from '../../styles/font.css';

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
          <h1 className={baseFontStyle.title}>{title}</h1>
          <ul>
            {tagList.map((tagId) => (
              <TagBox tagId={tagId} key={tagId} />
            ))}
          </ul>
        </div>
        <div className={baseFontStyle.medium}>
          {`제출 : ${numberSolved}, 평균 점수 : ${averageScore}점, 최고점 : ${highestScore}점 , 최저점 : ${lowestScore}점`}
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
