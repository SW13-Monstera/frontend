import { useParams } from 'react-router-dom';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';
import { IMultipleProblemDetailResponseData } from '../../../types/api/problem';

import { useQuery } from 'react-query';
import { SplitProblemDetailPageTemplate } from '../../../Template/SplitProblemDetailPageTemplate';
import { MetaTag } from '../../utils/MetaTag';
import { ProblemDescriptionBox } from '../../../Component/Box/ProblemDescriptionBox';
import { MultipleChoiceList } from '../../../Organism/ButtonList/MultipleChoiceList';
import { useMultipleProblemResult } from '../../../hooks/useMultipleProblemResult';

export function MultipleQuestionDetailPage() {
  const { id } = useParams();
  const { data, refetch } = useQuery<IMultipleProblemDetailResponseData>(
    'multipleProblemDetail',
    () => problemApiWrapper.multipleProblemDetail(id!),
    { refetchOnWindowFocus: false },
  );
  const { result, setResult, resetResult } = useMultipleProblemResult();

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
          <MultipleChoiceList
            choices={data?.choices}
            result={result}
            resetResult={resetResult}
            isMultipleAnswer={data?.isMultipleAnswer ?? false}
          />
        }
      />
    </>
  );
}
