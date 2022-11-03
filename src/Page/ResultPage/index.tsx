import { useLocation, useParams } from 'react-router-dom';

import { ILongProblemResultData } from '../../types/api/problem';
import { problemApiWrapper } from '../../api/wrapper/problem/problemApiWrapper';
import { useMutation } from 'react-query';
import { SkeletonLongProblemResultPage } from '../../Component/Skeleton/SkeletonLongProblemResultPage';
import { MetaTag } from '../utils/MetaTag';
import { SplitProblemDetailPageTemplate } from '../../Template/SplitProblemDetailPageTemplate';
import { ILongProblemResultLocationState } from '../../types/problem';
import { INVALID_ID_ERROR } from '../../errors';
import { useEffect } from 'react';
import { COLOR } from '../../constants/color';
import { StandardAnswerContent } from './Content/StandardAnswer';
import { USER_ANSWER_DOM_ID } from '../../constants/longProblem';
import { UserAnswerContent } from './Content/UserAnswer';
import { ChartContent } from './Content/Chart';

export default function ResultPage() {
  const { id } = useParams();
  const { userAnswer, title } = useLocation().state as ILongProblemResultLocationState;
  const { data: result, isLoading, mutate } = useMutation<ILongProblemResultData>(handleSubmit);

  function handleSubmit() {
    if (!id) throw INVALID_ID_ERROR;
    return problemApiWrapper.longProblemResult(id, userAnswer);
  }

  const createKeywordIdxList = () => {
    const keywordIdxList =
      result?.keywords
        .filter((e) => e.idx.length > 0)
        .map((keyword) => keyword.idx)
        .sort((a, b) => a[0] - b[0]) ?? [];

    let kcnt = 0;
    const refinedKeywordIdxList = keywordIdxList
      .map((_, idx) => {
        const kidx = idx + kcnt;
        if (
          idx !== keywordIdxList.length - 1 &&
          keywordIdxList[kidx][1] > keywordIdxList[kidx + 1][0]
        ) {
          kcnt++;
          return [
            Math.min(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
            Math.max(...keywordIdxList[kidx], ...keywordIdxList[kidx + 1]),
          ];
        } else {
          return keywordIdxList[kidx];
        }
      })
      .filter((e) => e);
    return refinedKeywordIdxList;
  };

  const createUserAnswerDOM = () => {
    const keywordIdxList = createKeywordIdxList();
    const userAnswerHTML =
      keywordIdxList.length > 0
        ? `<span>${result?.userAnswer.substring(0, keywordIdxList[0][0])}</span>` +
          keywordIdxList
            ?.map((keywordIdx, idx) =>
              idx !== keywordIdxList.length - 1
                ? `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                    keywordIdx[0],
                    keywordIdx[1] + 1,
                  )}</span>` +
                  `<span>${result?.userAnswer.substring(
                    keywordIdx[1] + 1,
                    keywordIdxList[idx + 1][0],
                  )}</span>`
                : `<span style="color: ${COLOR.PRIMARY}">${result?.userAnswer.substring(
                    keywordIdx[0],
                    keywordIdx[1] + 1,
                  )}</span>` + `<span>${result?.userAnswer.substring(keywordIdx[1] + 1)}</span>`,
            )
            .join('')
        : result?.userAnswer;
    document
      .getElementById(USER_ANSWER_DOM_ID)
      ?.insertAdjacentHTML('afterbegin', userAnswerHTML ?? '');
  };

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      createUserAnswerDOM();
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
