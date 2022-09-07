import '../../../styles/gutter.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IMultipleProblemDetailResponseData,
  IMultipleProblemResultData,
} from '../../../types/api/problem';
import {
  choiceCheckboxStyle,
  choiceListStyle,
  choiceWrapperStyle,
  contentTitleStyle,
  gradeResultScoredStyle,
  scoreStyle,
} from './style.css';
import { useGradeResult } from '../../../hooks/useGradeResult';
import { COLOR } from '../../../constants/color';
import { XIcon } from '../../../Icon/XIcon';
import { OIcon } from '../../../Icon/OIcon';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';

export function MultipleQuestionDetailPage() {
  const { id } = useParams();
  const { data } = useQuery<IMultipleProblemDetailResponseData>(
    'multipleProblemDetail',
    () => problemApiWrapper.multipleProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IMultipleProblemResultData | null>(null);

  const resetInput = () => {
    (document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>).forEach(
      (e) => (e.checked = false),
    );
  };
  const { isAnswer, isGraded } = useGradeResult(result, resetInput);

  function handleSubmit() {
    if (!id) return;
    const answerIds: number[] = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((e) => (e.checked ? answerIds.push(parseInt(e.id)) : ''));
    problemApiWrapper.multipleProblemResult(id, answerIds).then((data) => setResult(data));
  }

  return (
    <SplitProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <label htmlFor='answer' className={contentTitleStyle}>
        답안 선택
      </label>
      <div className={choiceListStyle}>
        {data?.choices.map((choice) => (
          <label htmlFor={choice.id.toString()} className={choiceWrapperStyle} key={choice.id}>
            <input type='checkbox' id={choice.id.toString()} className={choiceCheckboxStyle} />
            {choice.content}
          </label>
        ))}
      </div>
      {isGraded ? (
        isAnswer ? (
          <div className={gradeResultScoredStyle.correct}>
            <div>정답입니다</div>
            <OIcon fill={COLOR.CORRECT} width='2rem' height='2rem' />
          </div>
        ) : (
          <div className={gradeResultScoredStyle.wrong}>
            <div>오답입니다</div>
            <XIcon fill={COLOR.ERROR} width='2rem' height='2rem' />
          </div>
        )
      ) : (
        <></>
      )}
      <div className={scoreStyle}>{isGraded ? `내 점수: ${result?.score}점` : ''}</div>
    </SplitProblemDetailPageTemplate>
  );
}
