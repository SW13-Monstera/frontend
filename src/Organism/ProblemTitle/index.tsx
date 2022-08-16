import { IProblem } from '../../types/problem';
import TagBox from '../../Component/Box/TagBox';
import { descStyle, titleTagStyle, topStyle } from './style.css';
import baseFontStyle from '../../styles/font.css';
import { TAG_MAP_BY_ID } from '../../constants/tag';

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
            {tagList.map((tagId) => {
              {
                const tagValue = TAG_MAP_BY_ID.get(tagId);
                if (!tagValue) return;
                return <TagBox name={tagValue?.name} color={tagValue?.color} key={tagId} />;
              }
            })}
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
