import { useLocation } from 'react-router-dom';
import ProblemTitle from '../../Component/Utils/ProblemTitle';
import { listData } from '../../data';
import Header from '../../Template/Header';
import { IProblemIdLinkState } from '../../types/problem';

function ResultPage() {
  const state = useLocation().state as IProblemIdLinkState;
  const problemData = listData[state.problemId];

  return (
    <>
      <Header />
      <div>
        <ProblemTitle
          id={problemData.id}
          title={problemData.title}
          numberSolved={0}
          averageScore={0}
          highestScore={0}
          lowestScore={0}
          tagList={[]}
          desc={''}
        />
      </div>
    </>
  );
}
export default ResultPage;
