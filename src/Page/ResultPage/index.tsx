import { Link, useLocation } from 'react-router-dom';
import KeywordBox from '../../Component/Box/KeywordBox';
import TextBox from '../../Component/Box/TextBox';
import TextButton from '../../Component/Button/TextButton';
import ProblemTitle from '../../Component/Utils/ProblemTitle';
import { listData } from '../../data';
import { scoringResult } from '../../data/scoringResult';
import Header from '../../Template/Header';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import { IProblemIdLinkState } from '../../types/problem';
import {
  buttonListStyle,
  keywordListStyle,
  myAnswerContentStyle,
  pageContentStyle,
  pageStyle,
  providedAnswerStyle,
  subtitleStyle,
  textStyle,
} from './style.css';

function ResultPage() {
  const state = useLocation().state as IProblemIdLinkState;
  const problemData = listData[state.problemId];

  return (
    <>
      <Header />
      <div className={pageStyle}>
        <ProblemTitle
          id={problemData.id}
          title={problemData.title}
          numberSolved={problemData.numberSolved}
          averageScore={problemData.averageScore}
          highestScore={problemData.highestScore}
          lowestScore={problemData.lowestScore}
          tagList={problemData.tagList}
          answer={problemData.answer}
        />
        <div className={pageContentStyle}>
          <TextBox>
            <div className={myAnswerContentStyle}>
              <h3 className={subtitleStyle}>내 답안</h3>
              <ul className={keywordListStyle}>
                {problemData.keywordList?.map((keyword) => (
                  <KeywordBox
                    name={keyword}
                    isIncluded={scoringResult.keywordList.includes(keyword)}
                    key={keyword}
                  />
                ))}
              </ul>
              <p className={textStyle}>{scoringResult.answer}</p>
            </div>
          </TextBox>
          <TextBox>
            <div className={providedAnswerStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <p className={textStyle}>{problemData.answer}</p>
            </div>
          </TextBox>
        </div>
        <div className={buttonListStyle}>
          <Link to={`/list/${problemData.id}`} state={{ problemId: problemData.id }}>
            <TextButton
              type={BUTTON_TYPE.BUTTON}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              다시 풀기
            </TextButton>
          </Link>
          <Link to='/list'>
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
