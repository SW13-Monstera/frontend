import { ToastContainer } from 'react-toastify';
import Router from './Router';
import { appStyle } from './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore, useDarkModeStore } from './hooks/useStore';
import { useEffect } from 'react';
import { getUserInfo } from './utils/userInfo';
import { setTokenHeader } from './api/setTokenHeader';
import { Helmet } from 'react-helmet-async';
import { darkTheme, lightTheme } from './styles/theme.css';

function App() {
  const { setIsLogin } = useAuthStore();
  const { isDark } = useDarkModeStore();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setIsLogin(true);
      setTokenHeader();
    }
  }, []);

  return (
    <div className={`App ${isDark ? darkTheme : lightTheme} ${appStyle}`}>
      <Helmet></Helmet>
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
