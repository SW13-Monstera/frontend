import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';

const CallbackPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) return;
    // authApiWrapper.getUserInfo().then((res) => {
    // });
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
