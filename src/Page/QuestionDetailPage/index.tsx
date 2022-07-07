import { useEffect, useRef, useState } from 'react';
import Header from '../../Template/Header';
import {
  themeClass,
  pageStyle,
  topStyle,
  descStyle,
  titleStyle,
  statisticsStyle,
  questionContentStyle,
  questionDescStyle,
  answerInputStyle,
  handlerStyle,
} from './style.css';

function QuestionDetailPage() {
  const questionContentDOM = useRef<HTMLDivElement>(null);
  const dragHandlerDOM = useRef<HTMLDivElement>(null);
  const questionDescDOM = useRef<HTMLDivElement>(null);

  const [descWidth, setDescWidth] = useState(0);
  const [inputWidth, setInputWidth] = useState(0);

  const [x, setX] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragHandlerX, setDragHandlerX] = useState(0);
  const [XDiff, setXDiff] = useState(0);

  function calcWidth() {
    const questionContentRect: DOMRect | undefined =
      questionContentDOM.current?.getBoundingClientRect();
    const dragHandlerRect: DOMRect | undefined = dragHandlerDOM.current?.getBoundingClientRect();
    const questionDescRect: DOMRect | undefined = questionDescDOM.current?.getBoundingClientRect();
    if (!questionContentRect || !dragHandlerRect || !questionDescRect) return;

    const questionContentWidth = questionContentRect?.width;
    const questionDescWidth = dragHandlerX - questionDescRect.left;
    const answerInputWidth = questionContentWidth - questionDescWidth;

    setDescWidth(questionDescWidth);
    setInputWidth(answerInputWidth);
  }

  function startDrag() {
    setXDiff(x - dragHandlerX);
    setIsDragging(true);
  }

  function onDrag() {
    if (!isDragging) return;
    setDragHandlerX(x - XDiff);
  }

  function endDrag() {
    setIsDragging(false);
  }

  useEffect(() => {
    calcWidth();
  });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setX(e.clientX);
    };
    window.addEventListener('mousemove', update);

    const updateMobile = (e: TouchEvent) => {
      setX(e.touches[0].clientX);
    };
    window.addEventListener('touchmove', updateMobile);
    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('touchmove', updateMobile);
    };
  }, [setX]);

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
        <div className={questionContentStyle} ref={questionContentDOM}>
          <div className={questionDescStyle} ref={questionDescDOM} style={{ width: descWidth }}>
            <div>문제 설명</div>
            <div>문제 내용</div>
          </div>
          <div
            className={handlerStyle}
            ref={dragHandlerDOM}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            style={{ left: dragHandlerX }}
          ></div>
          z
          <div className={answerInputStyle} style={{ width: inputWidth }}>
            <label htmlFor="answer">답안 작성</label>
            <input id="answer"></input>
          </div>
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
