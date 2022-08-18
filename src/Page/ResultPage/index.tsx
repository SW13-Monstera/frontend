import { Link, useParams, useLocation } from 'react-router-dom';
import KeywordBox from '../../Component/Box/KeywordBox';
import TextBox from '../../Component/Box/TextBox';
import TextButton from '../../Component/Button/TextButton';
import ProblemTitle from '../../Organism/ProblemTitle';
import { listData } from '../../data';
import { scoringResult } from '../../data/scoringResult';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import {
  buttonListStyle,
  contentStyle,
  keywordListStyle,
  pageContentStyle,
  pageStyle,
  subtitleStyle,
  answerContentStyle,
} from './style.css';
import { URL, URLWithParam } from '../../constants/url';
import { ILongProblemResultData } from '../../types/api/problem';

function ResultPage() {
  const { id } = useParams();
  const {
    title,
    tags,
    description,
    totalSolved,
    gradingHistoryId,
    score,
    avgScore,
    topScore,
    bottomScore,
    keywords,
    userAnswer,
    standardAnswer,
  } = useLocation().state as ILongProblemResultData;
  if (!id) return;

  return (
    <>
      <Header />
      <div className={pageStyle}>
        <ProblemTitle
          id={id}
          title={title}
          numberSolved={totalSolved}
          averageScore={avgScore}
          highestScore={topScore}
          lowestScore={bottomScore}
          tagList={tags}
          answer={userAnswer}
        />
        <div className={pageContentStyle}>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <ul className={keywordListStyle}>
                {keywords?.map(({ id, content, isExist, idx }) => (
                  <KeywordBox name={content} isIncluded={isExist} key={id} />
                ))}
              </ul>
              <div className={answerContentStyle}>{userAnswer}</div>
            </div>
          </TextBox>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <p className={answerContentStyle}>{standardAnswer}</p>
            </div>
          </TextBox>
        </div>
        <div className={buttonListStyle}>
          <Link to={URLWithParam.LONG_PROBLEM_DETAIL(id)} state={{ problemId: id }}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              다시 풀기
            </TextButton>
          </Link>
          <Link to={URL.PROBLEM_LIST}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.SECONDARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              돌아가기
            </TextButton>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ResultPage;
