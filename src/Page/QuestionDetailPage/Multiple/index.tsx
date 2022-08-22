import '../../../styles/gutter.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import {
  IMultipleProblemDetailResponseData,
  IMultipleProblemResultData,
} from '../../../types/api/problem';
import { ProblemDetailPageTemplate } from '../../../Template/ProblemDetailPageTemplate';
import Split from 'react-split';
import {
  choiceCheckboxStyle,
  choiceListStyle,
  choiceWrapperStyle,
  contentTitleStyle,
  contentWrapperStyle,
  gradeResultScoredStyle,
  problemDescContentStyle,
  splitStyle,
} from './style.css';
import { useGradeResult } from '../../../hooks/useGradeResult';
import { COLOR } from '../../../constants/color';
import { XIcon } from '../../../Icon/XIcon';
import { OIcon } from '../../../Icon/OIcon';
import { useQuery } from 'react-query';

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
    <ProblemDetailPageTemplate data={data} handleSubmit={handleSubmit}>
      <Split
        sizes={[35, 65]}
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
        </div>
      </Split>
    </ProblemDetailPageTemplate>
  );
}
