import Split from 'react-split';
import {
  splitStyle,
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  answerInputContentStyle,
} from './style.css';
import '../gutter.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { URLWithParam } from '../../../constants/url';
import { ILongProblemDetailResponseData, ILongProblemResultData } from '../../../types/api/problem';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';

export function LongQuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ILongProblemDetailResponseData | null>(null);
  const [result, setResult] = useState<ILongProblemResultData | null>(null);

  function handleSubmit() {
    if (!id) return;
    const answer = (document.getElementById('answer') as HTMLTextAreaElement).value;
    problemApiWrapper.longProblemResult(id, answer).then((data) => {
      setResult(data);
    });
  }

  useEffect(() => {
    if (!id) return;
    problemApiWrapper.longProblemDetail(id).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (!id || !result) return;
    navigate(URLWithParam.LONG_PROBLEM_RESULT(id), { state: result });
  }, [result]);

  if (!id) return <></>;

  return (
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
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
        <div className={contentWrapperStyle}>
          <div className={contentTitleStyle}>문제 설명</div>
          <div className={problemDescContentStyle}>{data?.description}</div>
        </div>
        <div className={contentWrapperStyle}>
          <label htmlFor='answer' className={contentTitleStyle}>
            답안 작성
          </label>
          <textarea
            id='answer'
            placeholder='답변을 입력해주세요'
            className={answerInputContentStyle}
          ></textarea>
        </div>
      </Split>
    </ProblemDetailPageTemplate>
  );
}
