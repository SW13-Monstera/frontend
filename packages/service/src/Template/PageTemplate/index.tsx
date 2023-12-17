import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';
import ChatBot from '../../Organism/ChatApp';
import { mainStyle } from './style.css';

function PageTemplate() {
  return (
    <>
      <Header />
      <main className={mainStyle}>
        <Outlet />
      </main>
      <ChatBot />
      <Footer />
    </>
  );
}
export default PageTemplate;
