import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './constants/url';
import {
  MainPage,
  QuestionListPage,
  LongQuestionDetailPage,
  ResultPage,
  NicknamePage,
  JoinPage,
  CallbackPage,
  ShortQuestionDetailPage,
  MultipleQuestionDetailPage,
} from './Page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.MAIN} element={<MainPage />} />
        <Route path={URL.PROBLEM_LIST} element={<QuestionListPage />} />
        <Route path={URL.LONG_PROBLEM_DETAIL} element={<LongQuestionDetailPage />} />
        <Route path={URL.LONG_PROBLEM_RESULT} element={<ResultPage />} />
        <Route path={URL.SHORT_PROBLEM_DETAIL} element={<ShortQuestionDetailPage />} />
        <Route path={URL.SHORT_PROBLEM_RESULT} element={<ResultPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_DETAIL} element={<MultipleQuestionDetailPage />} />
        <Route path={URL.MULTIPLE__PROBLEM_RESULT} element={<ResultPage />} />
        <Route path={URL.JOIN} element={<JoinPage />} />
        <Route path={URL.NICKNAME} element={<NicknamePage />} />
        <Route path={URL.OAUTH_CALLBACK} element={<CallbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
