import Header from '../../Template/Header';
import Split from 'react-split';
import {
  themeClass,
  pageStyle,
  topStyle,
  descStyle,
  titleTagStyle,
  titleStyle,
  statisticsStyle,
  questionContentStyle,
  splitStyle,
  questionDescStyle,
  problemDescTitleStyle,
  problemDescContentStyle,
  buttonListStyle,
} from './style.css';
import './gutter.css';
import AnswerInput from '../../Component/Box/InputBox/AnswerInput';
import { Link, useLocation } from 'react-router-dom';
import { listData } from '../../data';
import Tag from '../../Component/Box/TagBox';
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_TYPE } from '../../types/button';
import TextButton from '../../Component/Button/TextButton';
import { IProblemIdLinkState } from '../../types/problem';

function QuestionDetailPage() {
  const state = useLocation().state as IProblemIdLinkState;
  const problemData = listData[state.problemId];

  return (
    <>
      <Header />
      <main className={`${themeClass} ${pageStyle}`}>
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

          <div>토글 버튼</div>
        </div>
        <div className={questionContentStyle}>
          <Split
            sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='horizontal'
            cursor='col-resize'
            className={splitStyle}
          >
            <div className={questionDescStyle}>
              <div className={problemDescTitleStyle}>문제 설명</div>
              <div className={problemDescContentStyle}>{problemData.desc}</div>
            </div>
            <AnswerInput />
          </Split>
        </div>

        <div className={buttonListStyle}>
          <Link to={`/result/${problemData.id}`} state={{ problemId: problemData.id }}>
            <TextButton
              type={BUTTON_TYPE.SUBMIT}
              theme={BUTTON_THEME.PRIMARY}
              size={BUTTON_SIZE.MEDIUM}
            >
              제출하기
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
      </main>
    </>
  );
}
export default QuestionDetailPage;
