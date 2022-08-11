import { Link, useParams } from 'react-router-dom';
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

function ResultPage() {
  const { id } = useParams();
  if (!id) return;
  const problemData = listData[parseInt(id) ?? 0];

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
            <div className={contentStyle}>
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
              <div className={answerContentStyle}>{scoringResult.answer}</div>
            </div>
          </TextBox>
          <TextBox>
            <div className={contentStyle}>
              <h3 className={subtitleStyle}>모범 답안</h3>
              <p className={answerContentStyle}>{problemData.answer}</p>
            </div>
          </TextBox>
        </div>
        <div className={buttonListStyle}>
          <Link to={URLWithParam.LONG_PROBLEM_DETAIL(id)} state={{ problemId: problemData.id }}>
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
