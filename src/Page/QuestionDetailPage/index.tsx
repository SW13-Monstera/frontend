import Header from '../../Template/Header';
import {
  themeClass,
  pageStyle,
  topStyle,
  descStyle,
  titleStyle,
  statisticsStyle,
} from './style.css';

function QuestionDetailPage() {
  return (
    <>
      <Header />
      <main className={themeClass}>
        <div className={pageStyle}>
          <div className={topStyle}>
            <div className={descStyle}>
              <h1 className={titleStyle}>문제 제목</h1>
              <div className={statisticsStyle}>
                제출 : 12345, 평균 점수 : 00.00점, 최고점 : 10점 , 최저점 : 2점
              </div>
            </div>

            <div>토글 버튼</div>
          </div>
          <div>
            <div>
              <div>문제 설명</div>
              <div>문제 내용</div>
            </div>
            <div>
              <label htmlFor="answer">답안 작성</label>
              <input id="answer"></input>
            </div>
          </div>
          <div>
            <button type="submit">제출</button>
            <button type="button">돌아가기</button>
          </div>
        </div>
      </main>
    </>
  );
}
export default QuestionDetailPage;
