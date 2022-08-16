import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';
import { URL } from '../../constants/url';
import { useAuthStore, useUserInfoStore } from '../../hooks/useStore';

const CallbackPage = () => {
  const { setIsLogin } = useAuthStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfoStore();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) return;
    authApiWrapper.getUserInfo(token).then((res) => {
      setUserInfo({ ...res.data, accessToken: token });
      navigate(URL.MAIN);
      setIsLogin(true);
      setUserInfo(res.data);
    });
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
