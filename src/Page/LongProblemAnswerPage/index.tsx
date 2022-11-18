import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { TextBox } from '../../Component/Box';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { INVALID_ID_ERROR } from '../../errors';
import { SplitProblemDetailPageTemplate } from '../../Template/SplitProblemDetailPageTemplate';
import { ILongProblemResultData } from '../../types/api/problem';
import { ILongProblemResultLocationState } from '../../types/problem';
import { StandardAnswerContent } from '../ResultPage/Content/StandardAnswer';
import { answerContentStyle, contentStyle, subtitleStyle } from '../ResultPage/style.css';
import { MetaTag } from '../utils/MetaTag';

export const LongProblemAnswerPage = () => {
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

  if (isLoading)
    return (
      <SkeletonLongProblemResultPage title={title} userAnswer={userAnswer} id={id!} tags={[]} />
    );

  return (
    <>
      <MetaTag title='CS Broker - 정답' />
      <SplitProblemDetailPageTemplate
        sizes={[50, 50]}
        data={result}
        handleSubmit={() => {
          return;
        }}
        isResult={true}
        isResultPage={true}
        leftSideContent={<StandardAnswerContent result={result} />}
        rightSideContent={
          <div className={contentStyle}>
            <h3 className={subtitleStyle}>내 답안</h3>
            <TextBox className={answerContentStyle}>{userAnswer}</TextBox>
          </div>
        }
      />
    </>
  );
};
