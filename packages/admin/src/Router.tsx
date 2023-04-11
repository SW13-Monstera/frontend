import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './constants/url';
import {
  LoginPage,
  DataLabelingPage,
  DoneDataDetailPage,
  ValidatingDataPage,
  LabelingDataListPage,
  ValidatingDataListPage,
  DoneDataListPage,
  LongProblemAddPage,
  LongProblemDetailPage,
  LongProblemListPage,
  LongProblemEditPage,
} from './pages';
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
        <Route path={URL.LABELING_DATA_LIST} element={<LabelingDataListPage />} />
        <Route path={URL.VALIDATING_DATA_LIST} element={<ValidatingDataListPage />} />
        <Route path={URL.DONE_DATA_LIST} element={<DoneDataListPage />} />
        <Route path={URL.DATA_LABELING} element={<DataLabelingPage />} />
        <Route path={URL.DATA_VALIDATING} element={<ValidatingDataPage />} />
        <Route path={URL.DATA_DONE} element={<DoneDataDetailPage />} />
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
