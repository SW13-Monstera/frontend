import { useEffect } from 'react';
import { Header, Footer } from '../';
import { USER_INFO } from '../../constants/localStorage';
import { useAuthStore } from '../../hooks/useStore';
import { mainStyle } from './style.css';

interface IPageTemplate {
  children: JSX.Element;
}

function PageTemplate({ children }: IPageTemplate) {
  const { setIsLogin } = useAuthStore();

  useEffect(() => {
    if (localStorage.getItem(USER_INFO)) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Header />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
export default PageTemplate;
