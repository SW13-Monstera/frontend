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
  LoginPage,
  ErrorPage,
  MyPage,
  UserDataEditPage,
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
        <Route path={URL.MULTIPLE_PROBLEM_DETAIL} element={<MultipleQuestionDetailPage />} />
        <Route path={URL.JOIN} element={<JoinPage />} />
        <Route path={URL.LOGIN} element={<LoginPage />} />
        <Route path={URL.NICKNAME} element={<NicknamePage />} />
        <Route path={URL.MYPAGE} element={<MyPage />} />
        <Route path={URL.USER_DATA_EDIT} element={<UserDataEditPage />} />
        <Route path={URL.OAUTH_CALLBACK} element={<CallbackPage />} />
        <Route path={URL.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
