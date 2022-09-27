import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '../constants/url';
import { useAuthStore } from '../hooks/useStore';

export const PublicLayout = () => {
  const { isLogin } = useAuthStore();

  return !isLogin ? <Outlet /> : <Navigate to={URL.MAIN} />;
};
