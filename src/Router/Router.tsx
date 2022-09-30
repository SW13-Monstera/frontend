import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from '../constants/url';
import {
  MainPage,
  QuestionListPage,
  LongQuestionDetailPage,
  ResultPage,
  JoinPage,
  CallbackPage,
  ShortQuestionDetailPage,
  MultipleQuestionDetailPage,
  LoginPage,
  ErrorPage,
  MyPage,
  UserDataEditPage,
} from '../Page';
import { RouteChangeTracker } from './RouteChangeTracker';
import { ProtectedLayout } from './ProtectedLayout';
import { PublicLayout } from './PublicLayout';
import { PageNotFoundPage } from '../Page/Error/PageNotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path={URL.MYPAGE} element={<MyPage />} />
          <Route path={URL.USER_DATA_EDIT} element={<UserDataEditPage />} />
          <Route path={URL.LONG_PROBLEM_RESULT} element={<ResultPage />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path={URL.JOIN} element={<JoinPage />} />
        </Route>
        <Route path={URL.MAIN} element={<MainPage />} />
        <Route path={URL.PROBLEM_LIST} element={<QuestionListPage />} />
        <Route path={URL.LONG_PROBLEM_DETAIL} element={<LongQuestionDetailPage />} />
        <Route path={URL.SHORT_PROBLEM_DETAIL} element={<ShortQuestionDetailPage />} />
        <Route path={URL.MULTIPLE_PROBLEM_DETAIL} element={<MultipleQuestionDetailPage />} />
        <Route path={URL.LOGIN} element={<LoginPage />} />
        <Route path={URL.OAUTH_CALLBACK} element={<CallbackPage />} />
        <Route path={URL.ERROR} element={<ErrorPage />} />s
        <Route path={URL.PAGE_NOT_FOUND} element={<PageNotFoundPage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
      <RouteChangeTracker />
    </BrowserRouter>
  );
}

export default Router;
