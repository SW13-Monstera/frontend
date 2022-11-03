import { useParams } from 'react-router-dom';
import problemSet from '../../../mock/problemSet.json';
import {
  contentWrapperStyle,
  indexButtonWrapperStyle,
  problemDetailWrapperStyle,
  problemSetDetailTitleStyle,
  problemSetTitleStyle,
} from './style.css';
import { TabMenuButton } from '../../../Component/Button/TabMenuButton';
import { useEffect, useMemo, useState } from 'react';
import { ErrorPage } from '../../Error/ErrorPage';
import { MetaTag } from '../../utils/MetaTag';
import { MultipleProblemSetDetail } from '../ProblemSetDetail/Multiple';
import { ShortProblemSetDetail } from '../ProblemSetDetail/Short';
import { LongProblemSetDetail } from '../ProblemSetDetail/Long';
import { IResult } from '../../../types/problemSet';

interface IProblemDetail {
  problemType: string;
  problemId: number;
  moveNext: () => void;
}

interface ICurrProblem {
  id: number;
  index: number;
}

const ProblemDetail = ({ problemType, problemId, moveNext }: IProblemDetail) => {
  const [resultList, setResultList] = useState<IResult[]>([]);

  const pushResult = (newResult: IResult) => {
    setResultList([...resultList, newResult]);
  };

  useEffect(() => {
    console.log(resultList);
  }, [resultList]);

  return (
    <div className={problemDetailWrapperStyle}>
      {problemType === 'long' ? (
        <LongProblemSetDetail
          problemId={problemId.toString()}
          moveNext={moveNext}
          pushResult={pushResult}
          resultList={resultList}
        />
      ) : problemType === 'short' ? (
        <ShortProblemSetDetail
          problemId={problemId.toString()}
          moveNext={moveNext}
          pushResult={pushResult}
        />
      ) : problemType === 'multiple' ? (
        <MultipleProblemSetDetail
          problemId={problemId.toString()}
          moveNext={moveNext}
          pushResult={pushResult}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export const ProblemSetDetailPage = () => {
  const { setId, id } = useParams();

  if (!setId || !id) return <ErrorPage />;

  const [currProblem, setCurrProblem] = useState<ICurrProblem>({ id: parseInt(id), index: 0 });
  const problemSetData = problemSet[parseInt(setId)];
  const problemType = useMemo(
    () =>
      [...problemSetData.problems, problemSetData.final_problem_id].find(
        (e) => e.id === currProblem.id,
      ),
    [currProblem],
  )?.type;
  const problemList: ICurrProblem[] = useMemo(
    () =>
      [...problemSetData.problems, problemSetData.final_problem_id].map((e, index) => {
        return { id: e.id, index: index };
      }),
    [problemSetData],
  );

  const moveNext = () => {
    const nextIndex = currProblem.index + 1;
    if (nextIndex >= problemList.length || nextIndex < 0) return;
    setCurrProblem(problemList[nextIndex]);
  };

  return (
    <>
      <MetaTag
        title={`CS Broker - ${problemSetData.set_title}`}
        description={`${problemSetData.set_title}에 관한 문제 세트입니다.`}
        keywords={`${problemSetData.set_title}, 서술형, 객관식, 단답형`}
      />
      <div className={problemSetDetailTitleStyle}>
        <h1 className={problemSetTitleStyle}>{problemSetData.set_title}</h1>
        <div>{`문제수: ${problemSetData.problems?.length + 1}개`}</div>
      </div>
      <div className={contentWrapperStyle}>
        <div className={indexButtonWrapperStyle}>
          {[...problemSetData.problems, problemSetData.final_problem_id].map((e, idx) => {
            return (
              <TabMenuButton
                key={e.id}
                idx={idx}
                isSelected={currProblem.id === e.id}
                onClick={() => {
                  setCurrProblem(problemList[idx]);
                }}
              />
            );
          })}
        </div>
        {problemType ? (
          <ProblemDetail problemType={problemType} problemId={currProblem.id} moveNext={moveNext} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
