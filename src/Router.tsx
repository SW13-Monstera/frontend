import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, QuestionListPage, QuestionDetailPage } from './Page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<QuestionListPage />} />
        <Route path="/list/:id" element={<QuestionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
