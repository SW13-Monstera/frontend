import LoginForm from '../../Organism/LoginForm';
import { MetaTag } from '../utils/MetaTag';
import { pageStyle, titleStyle } from './style.css';

export function LoginPage() {
  return (
    <>
      <MetaTag title='CS Broker - 로그인' />
      <>
        <div className={pageStyle}>
          <h2 className={titleStyle}>로그인</h2>
          <LoginForm />
        </div>
      </>
    </>
  );
}
