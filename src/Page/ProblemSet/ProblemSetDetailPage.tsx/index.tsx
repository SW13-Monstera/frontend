import { useNavigate, useParams } from 'react-router-dom';
import problemSet from '../../../mock/problemSet.json';
import {
  contentWrapperStyle,
  indexButtonWrapperStyle,
  problemSetDetailTitleStyle,
} from './style.css';
import { TabMenuButton } from '../../../Component/Button/TabMenuButton';
import { LongQuestionDetailPage } from '../../QuestionDetailPage/Long';
import { useEffect, useMemo, useState } from 'react';
import { ShortQuestionDetailPage } from '../../QuestionDetailPage/Short';
import { MultipleQuestionDetailPage } from '../../QuestionDetailPage/Multiple';
import { ErrorPage } from '../../Error/ErrorPage';
import { MetaTag } from '../../utils/MetaTag';
import { URLWithParam } from '../../../constants/url';

interface IProblemDetail {
  problemType: string;
  problemId: number;
}

const ProblemDetail = ({ problemType, problemId }: IProblemDetail) => {
  useEffect(() => {
    console.log(problemId);
  }, [problemId]);

  return (
    <>
      {problemType === 'long' ? (
        <LongQuestionDetailPage />
      ) : problemType === 'short' ? (
        <ShortQuestionDetailPage />
      ) : problemType === 'multiple' ? (
        <MultipleQuestionDetailPage />
      ) : (
        <></>
      )}
    </>
  );
};

export const ProblemSetDetailPage = () => {
  const navigate = useNavigate();
  const { setId, id } = useParams();

  if (!setId || !id) return <ErrorPage />;

  const [problemId, setProblemId] = useState(parseInt(id));
  const problemSetData = problemSet[parseInt(setId)];
  const problemType = useMemo(
    () =>
      [...problemSetData.problems, problemSetData.final_problem_id].find((e) => e.id === problemId),
    [problemId],
  )?.type;

  return (
    <>
      <MetaTag
        title={`CS Broker - ${problemSetData.set_title}`}
        description={`${problemSetData.set_title}에 관한 문제 세트입니다.`}
        keywords={`${problemSetData.set_title}, 서술형, 객관식, 단답형`}
      />
      <div className={problemSetDetailTitleStyle}>
        <h1>{problemSetData.set_title}</h1>
        <div>{`문제수: ${problemSetData.problems?.length + 1}개`}</div>
      </div>
      <div className={contentWrapperStyle}>
        <div className={indexButtonWrapperStyle}>
          {[...problemSetData.problems, problemSetData.final_problem_id].map((e, idx) => (
            <TabMenuButton
              key={e.id}
              idx={idx}
              isSelected={problemId === e.id}
              onClick={() => {
                setProblemId(e.id);
                navigate(URLWithParam.PROBLEM_SET_DETAIL(parseInt(setId), e.id));
              }}
            />
          ))}
        </div>
        {problemType ? <ProblemDetail problemType={problemType} problemId={problemId} /> : <></>}
      </div>
    </>
  );
};
