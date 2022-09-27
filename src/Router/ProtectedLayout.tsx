import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '../constants/url';
import { useAuthStore } from '../hooks/useStore';

export const ProtectedLayout = () => {
  const { isLogin } = useAuthStore();

  return isLogin ? <Outlet /> : <Navigate to={URL.LOGIN} />;
};
