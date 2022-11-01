import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../';
import { mainStyle } from './style.css';

function PageTemplate() {
  return (
    <>
      <Header />
      <main className={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default PageTemplate;
