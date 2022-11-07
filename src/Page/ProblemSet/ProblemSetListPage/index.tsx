import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URLWithParam } from '../../../constants/url';
import { IProblemSetDataElement } from '../../../types/problemSet';
import { isProduction } from '../../../utils/isProduction';

export const ProblemSetListPage = () => {
  const [problemSetDataList, setProblemSetDataList] = useState<IProblemSetDataElement[]>();

  useEffect(() => {
    if (isProduction) {
      import('../../../mock/problemSet.json').then((data) => setProblemSetDataList(data.default));
    } else {
      import('../../../mock/problemSetDev.json').then((data) =>
        setProblemSetDataList(data.default),
      );
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {problemSetDataList?.map((problemSet) => (
        <Link to={URLWithParam.PROBLEM_SET_DETAIL(problemSet.id)} key={problemSet.id}>
          <div style={{ border: '1px solid black' }}>{problemSet.setTitle}</div>
        </Link>
      ))}
    </div>
  );
};
