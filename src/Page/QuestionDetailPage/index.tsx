import Header from '../../Template/Header';
import Split from 'react-split';
import {
  themeClass,
  pageStyle,
  topStyle,
  descStyle,
  titleStyle,
  statisticsStyle,
  questionContentStyle,
  splitStyle,
  questionDescStyle,
  answerInputStyle,
} from './style.css';
import AnswerInput from '../../Component/Box/InputBox/AnswerInput';

function QuestionDetailPage() {
  return (
    <>
      <Header />
      <main className={`${themeClass} ${pageStyle}`}>
        <div className={topStyle}>
          <div className={descStyle}>
            <h1 className={titleStyle}>문제 제목</h1>
            <div className={statisticsStyle}>
              제출 : 12345, 평균 점수 : 00.00점, 최고점 : 10점 , 최저점 : 2점
            </div>
          </div>

          <div>토글 버튼</div>
        </div>
        {/* <div className={questionContentStyle}>
          <div className={questionDescStyle}>
            <div>문제 설명</div>
            <div>문제 내용</div>
          </div>
          <div className={handlerStyle}></div>z
          <div className={answerInputStyle}>
            <label htmlFor="answer">답안 작성</label>
            <input id="answer"></input>
          </div>
        </div> */}
        <div className={questionContentStyle}>
          <Split className={splitStyle}>
            <div>hi</div>
            <div>bye</div>
          </Split>
        </div>

        <div>
          <button type="submit">제출</button>
          <button type="button">돌아가기</button>
        </div>
      </main>
    </>
  );
}
export default QuestionDetailPage;
