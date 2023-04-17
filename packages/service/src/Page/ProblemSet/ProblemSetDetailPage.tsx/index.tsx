import { useParams } from 'react-router-dom';
import { QuestionListElementBox } from '../../../Component/Box';
import { ErrorPage } from '../../Error/ErrorPage';
import { MetaTag } from '../../utils/MetaTag';
import {
  problemSetDescStyle,
  problemSetDetailWrapperStyle,
  problemSetListStyle,
  problemSetTitleStyle,
} from './style.css';
import { TProblemType } from '../../../types/problem';
import { useQuery } from 'react-query';
import { problemApiWrapper } from '../../../api/wrapper/problem/problemApiWrapper';

export const ProblemSetDetailPage = () => {
  const { setId } = useParams();

  if (!setId) return <ErrorPage />;

  const { data: problemSet } = useQuery(['problemset-detail'], () =>
    problemApiWrapper.problemSetDetail(setId),
  );

  return (
    <>
      <MetaTag
        title={`CS Broker - ${problemSet?.name}`}
        description={`${problemSet?.name}에 관한 문제 세트입니다.`}
        keywords={`${problemSet?.name}, 서술형, 객관식, 단답형`}
      />
      <div className={problemSetDetailWrapperStyle}>
        <div>
          <h2 className={problemSetTitleStyle}>{problemSet?.name}</h2>
          <p className={problemSetDescStyle}>{problemSet?.description}</p>
        </div>
        <div className={problemSetListStyle}>
          {problemSet?.problems?.map((problem) => {
            return (
              <QuestionListElementBox
                key={problem.id}
                id={problem.id}
                title={problem.title}
                tags={problem.tags}
                type={problem.type as TProblemType}
                totalSubmission={problem.totalSubmission}
                avgScore={problem.avgScore}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
