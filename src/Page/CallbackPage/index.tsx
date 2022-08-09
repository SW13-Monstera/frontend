import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { authApiWrapper } from '../../api/wrapper/auth/authApiWrapper';

const CallbackPage = () => {
  const { token } = useParams();

  useEffect(() => {
    if(!token) return;
    authApiWrapper.getUserInfo().then((res) => {
      
    })
  }, []);

  return <div>CallbackPage</div>;
};

export default CallbackPage;
