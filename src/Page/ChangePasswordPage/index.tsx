import { useNavigate, useParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { URL } from '../../constants/url';
import { PasswordForm } from '../../Organism/PasswordForm';
import { PageTemplate } from '../../Template';
import { IChangePassword } from '../../types/auth';
import { pageStyle } from './style.css';

export const ChangePasswordPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const submitNewPassword = () => {
    const passwordValue = (document.getElementById('password') as HTMLInputElement).value;
    const passwordConfirmValue = (document.getElementById('password-confirm') as HTMLInputElement)
      .value;
    if (passwordValue !== passwordConfirmValue) return;
    if (!code || !passwordValue) return;
    const data: IChangePassword = {
      code: code,
      password: passwordValue,
    };
    authApiWrapper.changePassword(data);
    navigate(URL.MAIN);
  };
  return (
    <PageTemplate>
      <div className={pageStyle}>
        <PasswordForm submitNewPassword={submitNewPassword} />
      </div>
    </PageTemplate>
  );
};
