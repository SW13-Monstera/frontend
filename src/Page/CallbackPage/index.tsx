import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';

const CallbackPage = () => {
  const navigate = useNavigate();
  const { params } = useParams();

  const getUserData = (code: string) => {
    authApiWrapper.githubRedirect(code).then((res: any) => {
      console.log(res);
      navigate('/');
    });
  };

  const searchParams = new URLSearchParams(params);
  const codeStr = searchParams.get('code');
  if (!codeStr) return <Navigate replace to='/' />;
  useEffect(() => {
    getUserData(codeStr);
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
