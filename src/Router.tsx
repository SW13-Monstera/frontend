import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, QuestionListPage, QuestionDetailPage, ResultPage } from './Page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<QuestionListPage />} />
        <Route path='/list/:id' element={<QuestionDetailPage />} />
        <Route path='/result/:id' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
