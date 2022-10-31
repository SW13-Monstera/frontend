import { PageTemplate } from '../../../Template';
import problemSetList from '../../../mock/problemSet.json';
import { Link } from 'react-router-dom';
import { URLWithParam } from '../../../constants/url';

export const ProblemSetListPage = () => {
  return (
    <PageTemplate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {problemSetList.map((problemSet) => (
          <Link
            to={URLWithParam.PROBLEM_SET_DETAIL(problemSet.id, problemSet.problem_numbers[0])}
            key={problemSet.id}
          >
            <div style={{ border: '1px solid black' }}>{problemSet.set_title}</div>
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
};
