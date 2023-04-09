import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '../constants/url';
import { getUserInfo } from '../utils/userInfo';

export const ProtectedLayout = () => {
  const userInfo = getUserInfo();

  return userInfo ? <Outlet /> : <Navigate to={URL.LOGIN} />;
};
