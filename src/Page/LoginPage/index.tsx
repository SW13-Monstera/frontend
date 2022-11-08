import { toast } from 'react-toastify';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import LoginForm from '../../Organism/LoginForm';
import { PageTemplate } from '../../Template';
import { setUserInfo } from '../../utils/userInfo';
import { validateEmail } from '../../utils/validate';
import { MetaTag } from '../utils/MetaTag';
import { pageStyle, titleStyle } from './style.css';

export function LoginPage() {
  const handleSubmit = () => {
    const emailValue = (document.getElementById('email') as HTMLInputElement)?.value;
    const passwordValue = (document.getElementById('password') as HTMLInputElement)?.value;

    if (!emailValue) {
      toast('이메일은 필수항목입니다.');
      return;
    }
    if (!validateEmail(emailValue)) {
      toast('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!passwordValue) {
      toast('비밀번호는 필수항목입니다.');
      return;
    }

    return authApiWrapper
      .login({
        email: emailValue,
        password: passwordValue,
      })
      .then(
        (res) => {
          setUserInfo(res);
          // setIsLogin(true);
          return true;
        },
        (err) => false,
      );
  };

  return (
    <>
      <MetaTag title='CS Broker - 로그인' />
      <PageTemplate>
        <div className={pageStyle}>
          <div className={titleStyle}>로그인</div>
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </PageTemplate>
    </>
  );
}
