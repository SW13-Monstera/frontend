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
  isMultipleAnswerStyle,
} from './style.css';
import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';
import { MetaTag } from '../../utils/MetaTag';
import { ProblemDescriptionBox } from '../../../Component/Box/ProblemDescriptionBox';
import { ResultBox } from '../../../Component/Box/ResultBox';

export function MultipleQuestionDetailPage() {
  const { id } = useParams();
  const { data, refetch } = useQuery<IMultipleProblemDetailResponseData>(
    'multipleProblemDetail',
    () => problemApiWrapper.multipleProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const [result, setResult] = useState<IMultipleProblemResultData | null>(null);

  const resetInput = () => {
    (document.querySelectorAll('input') as NodeListOf<HTMLInputElement>).forEach(
      (e) => (e.checked = false),
    );
  };

  const resetResult = () => {
    if (!result) return;
    resetInput();
    setResult(null);
  };

  function handleSubmit() {
    if (!id) return;
    const answerIds: number[] = [];
    const checkboxes = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((e) => (e.checked ? answerIds.push(parseInt(e.id)) : ''));
    problemApiWrapper.multipleProblemResult(id, answerIds).then((data) => {
      setResult(data);
      refetch();
    });
  }

  return (
    <>
      <MetaTag
        title={`CS Broker - ${data?.title}`}
        description={`${data?.title}에 관한 객관식 문제입니다. 모든 정답을 선택한 후 제출하기 버튼을 눌러주세요.`}
        keywords={`${data?.tags.join(', ')}, ${data?.title}, 객관식`}
      />

      <SplitProblemDetailPageTemplate
        data={data}
        handleSubmit={handleSubmit}
        isResult={result !== null && result !== undefined}
        resetResult={resetResult}
        isSubmittable={true}
        leftSideContent={<ProblemDescriptionBox>{data?.description}</ProblemDescriptionBox>}
        rightSideContent={
          <>
            <label htmlFor='answer' className={contentTitleStyle}>
              답안 선택
              <span className={isMultipleAnswerStyle}>
                {data?.isMultipleAnswer ? ' (복수 선택)' : ' (정답 한개)'}
              </span>
            </label>
            <div className={choiceListStyle} onClick={resetResult}>
              {data?.choices.map((choice) => (
                <label
                  htmlFor={choice.id.toString()}
                  className={choiceWrapperStyle}
                  key={choice.id}
                >
                  <input
                    type={data?.isMultipleAnswer ? 'checkbox' : 'radio'}
                    id={choice.id.toString()}
                    className={choiceCheckboxStyle}
                    name='answer'
                  />
                  {choice.content}
                </label>
              ))}
            </div>
            {result ? (
              <ResultBox
                isCorrect={result.isAnswer}
                score={result.score}
                onClick={resetResult}
                text={result.isAnswer ? '정답입니다' : '오답입니다'}
              />
            ) : (
              <></>
            )}
          </>
        }
      ></SplitProblemDetailPageTemplate>
    </>
  );
}
