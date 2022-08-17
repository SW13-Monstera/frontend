import { useEffect } from 'react';
import { Header, Footer } from '../';
import { useAuthStore } from '../../hooks/useStore';
import { getUserInfo } from '../../utils/userInfo';
import { mainStyle } from './style.css';

interface IPageTemplate {
  children: JSX.Element;
}

function PageTemplate({ children }: IPageTemplate) {
  const { setIsLogin } = useAuthStore();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
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
