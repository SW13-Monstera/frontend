import { useLocation, useParams } from 'react-router-dom';

import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { MetaTag } from '../utils/MetaTag';
import { SplitProblemDetailPageTemplate } from '../../Template/SplitProblemDetailPageTemplate';
import { ILongProblemResultLocationState } from '../../types/problem';
import { INVALID_ID_ERROR } from '../../errors';
import { StandardAnswerContent } from './Content/StandardAnswer';
import { UserAnswerContent } from './Content/UserAnswer';
import { ChartContent } from './Content/Chart';
import { createUserAnswerDOM } from '../../utils/createLongProblemDOM';

export default function ResultPage() {
  const { id } = useParams();
  const { userAnswer, title } = useLocation().state as ILongProblemResultLocationState;
  const { data: result, isLoading, mutate } = useMutation<ILongProblemResultData>(handleSubmit);

  function handleSubmit() {
    if (!id) throw INVALID_ID_ERROR;
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      createUserAnswerDOM(result);
    }
  }, [result]);

  if (!id) return <></>;
  if (isLoading)
    return (
      <SkeletonLongProblemResultPage title={title} userAnswer={userAnswer} id={id!} tags={[]} />
    );

  return (
    <>
      <MetaTag title='CS Broker - 채점 결과' />
      <SplitProblemDetailPageTemplate
        sizes={[50, 50]}
        data={result}
        handleSubmit={handleSubmit}
        isResult={true}
        isResultPage={true}
        leftSideContent={<StandardAnswerContent result={result} />}
        rightSideContent={<UserAnswerContent result={result} />}
        bottomContent={<ChartContent result={result} />}
      />
    </>
  );
}
