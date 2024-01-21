import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './constants/url';
import { LoginPage } from './pages/login/LoginPage';
import { LongProblemListPage } from './pages/problem/long/LongProblemListPage';
import { LongProblemDetailPage } from './pages/problem/long/LongProblemDetailPage';
import { LongProblemAddPage } from './pages/problem/long/LongProblemAddPage';
import { LongProblemEditPage } from './pages/problem/long/LongProblemEditPage';
import { MultipleProblemAddPage } from './pages/problem/multiple/MultipleProblemAddPage';
import { MultipleProblemDetailPage } from './pages/problem/multiple/MultipleProblemDetailPage';
import { MultipleProblemEditPage } from './pages/problem/multiple/MultipleProblemEditPage';
import { MultipleProblemListPage } from './pages/problem/multiple/MultipleProblemListPage';
import { ShortProblemAddPage } from './pages/problem/short/ShortProblemAddPage';
import { ShortProblemDetailPage } from './pages/problem/short/ShortProblemDetailPage';
import { ShortProblemEditPage } from './pages/problem/short/ShortProblemEditPage';
import { ShortProblemListPage } from './pages/problem/short/ShortProblemListPage';
import { ProblemSetListPage } from './pages/problem/problemSet/ProblemSetListPage';
import { NoticePage } from './pages/user/NoticePage';
import { UserPage } from './pages/user/UserPage';
import { ProblemSetAddPage } from './pages/problem/problemSet/ProblemSetAddPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.LOGIN} element={<LoginPage />} />
        <Route path={URL.LONG_PROBLEM_LIST} element={<LongProblemListPage />} />
        <Route path={URL.LONG_PROBLEM_DETAIL} element={<LongProblemDetailPage />} />
        <Route path={URL.LONG_PROBLEM_ADD} element={<LongProblemAddPage />} />
        <Route path={URL.LONG_PROBLEM_EDIT} element={<LongProblemEditPage />} />
        <Route path={URL.SHORT_PROBLEM_LIST} element={<ShortProblemListPage />} />
        <Route path={URL.SHORT_PROBLEM_DETAIL} element={<ShortProblemDetailPage />} />
        <Route path={URL.SHORT_PROBLEM_ADD} element={<ShortProblemAddPage />} />
        <Route path={URL.SHORT_PROBLEM_EDIT} element={<ShortProblemEditPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_LIST} element={<MultipleProblemListPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_DETAIL} element={<MultipleProblemDetailPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_ADD} element={<MultipleProblemAddPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_EDIT} element={<MultipleProblemEditPage />} />
        <Route path={URL.PROBLEM_SET_LIST} element={<ProblemSetListPage />} />
        <Route path={URL.PROBLEM_SET_ADD} element={<ProblemSetAddPage />} />
        <Route path={URL.USER} element={<UserPage />} />
        <Route path={URL.NOTICE_CREATE} element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
