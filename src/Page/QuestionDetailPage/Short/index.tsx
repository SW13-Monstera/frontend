import {
  contentWrapperStyle,
  contentTitleStyle,
  problemDescContentStyle,
  answerInputWrapperStyle,
  answerInputTitleStyle,
  answerInputScoredStyle,
  scoreStyle,
} from './style.css';
import '../gutter.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IShortProblemDetailResponseData,
  IShortProblemResultData,
} from '../../../types/api/problem';
import { XIcon } from '../../../Icon/XIcon';
import { OIcon } from '../../../Icon/OIcon';
import { COLOR } from '../../../constants/color';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';
import { useQuery } from 'react-query';
import { MarkdownBox } from '../../../Component/Box/MarkdownBox';

export function ShortQuestionDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<IShortProblemDetailResponseData>(
    'shortProblemDetail',
    () => problemApiWrapper.shortProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IShortProblemResultData | null>(null);

  const resetInput = () => {
    (document.getElementById('answer') as HTMLInputElement).value = '';
  };
  const resetResult = () => {
    resetInput();
    setResult(null);
  };

  function handleSubmit() {
    if (!id) return;
    const data = (document.getElementById('answer') as HTMLInputElement).value;
    problemApiWrapper.shortProblemResult(id, data).then((data) => setResult(data));
  }

  return (
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <div className={contentWrapperStyle}>
        <div className={contentTitleStyle}>문제 설명</div>
        <div className={problemDescContentStyle}>
          <MarkdownBox>{data?.description}</MarkdownBox>
        </div>
      </div>
      <div className={answerInputWrapperStyle}>
        <label htmlFor='answer' className={answerInputTitleStyle}>
          정답 입력
        </label>
        <input
          id='answer'
          placeholder='답변을 입력해주세요'
          className={
            answerInputScoredStyle[result ? (result?.isAnswer ? 'correct' : 'wrong') : 'default']
          }
          autoComplete='off'
          onFocus={resetResult}
        ></input>
        {result ? (
          result.isAnswer ? (
            <OIcon fill={COLOR.CORRECT} width='3rem' height='3rem' />
          ) : (
            <XIcon fill={COLOR.ERROR} width='3rem' height='3rem' />
          )
        ) : (
          <></>
        )}
      </div>
      <div className={scoreStyle}>{result ? `내 점수: ${result?.score}점` : ''}</div>
    </ProblemDetailPageTemplate>
  );
}
