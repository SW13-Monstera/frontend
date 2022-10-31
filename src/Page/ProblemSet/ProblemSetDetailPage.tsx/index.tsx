import { useParams } from 'react-router-dom';
import { PageTemplate } from '../../../Template';
import problemSet from '../../../mock/problemSet.json';
import {
  contentWrapperStyle,
  indexButtonStyle,
  indexButtonWrapperStyle,
  problemSetDetailTitleStyle,
} from './style.css';
import { useEffect } from 'react';

export const ProblemSetDetailPage = () => {
  const { setId, problemId } = useParams();
  if (!setId || !problemId) return;
  const problemSetData = problemSet[parseInt(setId)];

  useEffect(() => {
    console.log(new Array(problemSetData.problem_numbers.length + 1));
  }, []);

  return (
    <PageTemplate>
      <div className={problemSetDetailTitleStyle}>
        <h1>{problemSetData.set_title}</h1>
        <div>{`문제수: ${problemSetData.problem_numbers.length + 1}개`}</div>
      </div>
      <div className={contentWrapperStyle}>
        <div className={indexButtonWrapperStyle}>
          {[...problemSetData.problem_numbers, problemSetData.final_problem_id].map((e, idx) => (
            <button
              key={e}
              className={idx === 0 ? indexButtonStyle['selected'] : indexButtonStyle['default']}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
