import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  MainPage,
  QuestionListPage,
  QuestionDetailPage,
  ResultPage,
  NicknamePage,
  JoinPage,
} from './Page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<QuestionListPage />} />
        <Route path='/list/:id' element={<QuestionDetailPage />} />
        <Route path='/result/:id' element={<ResultPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/join/nickname' element={<NicknamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
