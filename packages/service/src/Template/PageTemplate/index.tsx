import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';
import FloatingButton from '../../Component/Button/FloatingButton';
import ChatApp from '../../Organism/ChatApp';
import { mainStyle } from './style.css';

function PageTemplate() {
  return (
    <>
      <Header />
      <main className={mainStyle}>
        <Outlet />
      </main>
      <FloatingButton />
      <ChatApp />
      <Footer />
    </>
  );
}
export default PageTemplate;
