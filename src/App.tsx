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
import { DARK_MODE } from './constants/localStorage';

function App() {
  const { setIsLogin } = useAuthStore();
  const { isDark, setIsDark } = useDarkModeStore();

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setIsLogin(true);
      setTokenHeader();
    }

    const darkModePreference = localStorage.getItem(DARK_MODE);
    if (darkModePreference !== null) {
      setIsDark(JSON.parse(darkModePreference));
      localStorage.setItem(DARK_MODE, darkModePreference);
    } else {
      setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

      localStorage.setItem(
        DARK_MODE,
        JSON.stringify(
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        ),
      );
    }

    history.scrollRestoration = 'auto';
  }, []);

  return (
    <div className={`App ${isDark ? darkTheme : lightTheme} ${appStyle}`}>
      <Helmet />
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
