import { Header, Footer } from '../';
import { mainStyle } from './style.css';

interface IPageTemplate {
  children: JSX.Element;
}

function PageTemplate({ children }: IPageTemplate) {
  return (
    <>
      <Header />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
export default PageTemplate;
