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
} from './style.css';
import './gutter.css';
import AnswerInput from '../../Component/Box/InputBox/AnswerInput';
import { Link, useLocation } from 'react-router-dom';
import { listData } from '../../data';
import Tag from '../../Component/Tag';

interface IState {
  problemId: number;
}

function QuestionDetailPage() {
  const state = useLocation().state as IState;
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
                {problemData.tag.map((tagName) => (
                  <Tag name={tagName} key={tagName} />
                ))}
              </ul>
            </div>
            <div className={statisticsStyle}>
              제출 : 12345, 평균 점수 : 00.00점, 최고점 : 10점 , 최저점 : 2점
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
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
            className={splitStyle}
          >
            <div className={questionDescStyle}>
              <div className={problemDescTitleStyle}>문제 설명</div>
              <div className={problemDescContentStyle}>{problemData.desc}</div>
            </div>
            <AnswerInput />
          </Split>
        </div>

        <div>
          <Link to={`/result/${1}`}>
            <button type="submit">제출</button>
          </Link>
          <Link to="">
            <button type="button">돌아가기</button>
          </Link>
        </div>
      </main>
    </>
  );
}
export default QuestionDetailPage;
