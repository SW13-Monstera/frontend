import { IProblem } from '../../../types';
import Tag from '../../Tag';
import { descStyle, statisticsStyle, titleStyle, titleTagStyle, topStyle } from './style.css';

function ProblemTitle(problemData: IProblem) {
  return (
    <div className={topStyle}>
      <div className={descStyle}>
        <div className={titleTagStyle}>
          <h1 className={titleStyle}>{problemData.title}</h1>
          <ul>
            {problemData.tagList.map((tagName) => (
              <Tag name={tagName} key={tagName} />
            ))}
          </ul>
        </div>
        <div className={statisticsStyle}>
          {`제출 : ${problemData.numberSolved}, 평균 점수 : ${problemData.averageScore}점, 최고점 : ${problemData.highestScore}점 , 최저점 : ${problemData.lowestScore}점`}
        </div>
      </div>
    </div>
  );
}
export default ProblemTitle;
