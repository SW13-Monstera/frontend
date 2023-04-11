import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '../constants/url';
import { getUserInfo } from 'auth/utils/userInfo';

export const PublicLayout = () => {
  const userInfo = getUserInfo();

  return !userInfo ? <Outlet /> : <Navigate to={URL.MAIN} />;
};
