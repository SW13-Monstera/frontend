import { useLocation } from 'react-router-dom';
import { listData } from '../../data';
import Header from '../../Template/Header';
import { IProblemIdLinkState } from '../../types';

function ResultPage() {
  const state = useLocation().state as IProblemIdLinkState;
  const problemData = listData[state.problemId];

  return (
    <>
      <Header />
      <div></div>
    </>
  );
}
export default ResultPage;
