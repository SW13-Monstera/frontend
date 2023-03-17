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
  ChangePasswordEmailPage,
  ChangePasswordWithLoginPage,
  ChangePasswordWithoutLoginPage,
  PageNotFoundPage,
  TermsOfServicePage,
  PrivacyPolicyPage,
  ProblemSetListPage,
  ProblemSetDetailPage,
  NotificationPage,
} from '../Page';
import { RouteChangeTracker } from './RouteChangeTracker';
import { ProtectedLayout } from './ProtectedLayout';
import { PublicLayout } from './PublicLayout';
import { PageTemplate } from '../Template';
import { DescriptionPage } from '../Page/DescriptionPage';
import { LongProblemAnswerPage } from '../Page/LongProblemAnswerPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route element={<ProtectedLayout />}>
            <Route path={URL.USER_DATA_EDIT} element={<UserDataEditPage />} />
            <Route path={URL.LONG_PROBLEM_RESULT} element={<ResultPage />} />
            <Route
              path={URL.CHANGE_PASSWORD_WITH_LOGIN}
              element={<ChangePasswordWithLoginPage />}
            />
            <Route path={URL.NOTIFICATION} element={<NotificationPage />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path={URL.JOIN} element={<JoinPage />} />
            <Route path={URL.SEND_CHANGE_PASSWORD_EMAIL} element={<ChangePasswordEmailPage />} />
            <Route path={URL.CHANGE_PASSWORD} element={<ChangePasswordWithoutLoginPage />} />
          </Route>
          <Route path={URL.MAIN} element={<MainPage />} />
          <Route path={URL.PROBLEM_LIST} element={<QuestionListPage />} />
          <Route path={URL.PROBLEM_SET_LIST} element={<ProblemSetListPage />} />
          <Route path={URL.LONG_PROBLEM_DETAIL} element={<LongQuestionDetailPage />} />
          <Route path={URL.LONG_PROBLEM_ANSWER} element={<LongProblemAnswerPage />} />
          <Route path={URL.SHORT_PROBLEM_DETAIL} element={<ShortQuestionDetailPage />} />
          <Route path={URL.MULTIPLE_PROBLEM_DETAIL} element={<MultipleQuestionDetailPage />} />
          <Route path={URL.PROBLEM_SET_DETAIL} element={<ProblemSetDetailPage />} />
          <Route path={URL.LOGIN} element={<LoginPage />} />
          <Route path={URL.TERMS_OF_SERVICE} element={<TermsOfServicePage />} />
          <Route path={URL.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
          <Route path={URL.DESCRIPTION} element={<DescriptionPage />} />
          <Route path={URL.MYPAGE} element={<MyPage />} />
          <Route path={URL.OAUTH_CALLBACK} element={<CallbackPage />} />
          <Route path={URL.ERROR} element={<ErrorPage />} />
          <Route path={URL.PAGE_NOT_FOUND} element={<PageNotFoundPage />} />
          <Route path='*' element={<PageNotFoundPage />} />
        </Route>
      </Routes>
      <RouteChangeTracker />
    </BrowserRouter>
  );
}

export default Router;
