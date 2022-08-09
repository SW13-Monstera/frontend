import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './constants/url';
import {
  MainPage,
  QuestionListPage,
  QuestionDetailPage,
  ResultPage,
  NicknamePage,
  JoinPage,
  CallbackPage,
} from './Page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.MAIN} element={<MainPage />} />
        <Route path={URL.PROBLEM_LIST} element={<QuestionListPage />} />
        <Route path={URL.LONG_PROBLEM_DETAIL} element={<QuestionDetailPage />} />
        <Route path={URL.LONG_PROBLEM_RESULT} element={<ResultPage />} />
        <Route path={URL.JOIN} element={<JoinPage />} />
        <Route path={URL.NICKNAME} element={<NicknamePage />} />
        <Route path={URL.CALLBACK} element={<CallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
