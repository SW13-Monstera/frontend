/* eslint-disable @typescript-eslint/no-empty-function */
import { ToastContainer } from 'react-toastify';
import Router from './Router/Router';
import { appStyle } from './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDarkModeStore } from './hooks/useStore';
import { useEffect } from 'react';
import { getUserInfo } from 'auth/utils/userInfo';
import { setTokenHeader } from './api/setTokenHeader';
import { Helmet } from 'react-helmet-async';
import { darkTheme, lightTheme } from './styles/theme.css';
import { DARK_MODE } from './constants/localStorage';
import { addGoogleAnalyticsTag } from './utils/googleAnalytics';

function App() {
  const { isDark, setIsDark } = useDarkModeStore();

  if (import.meta.env.PROD) {
    console.log = () => {};
    console.error = () => {};
    console.warn = () => {};
  }

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
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

    addGoogleAnalyticsTag();
  }, []);

  return (
    <div className={`App ${isDark ? darkTheme : lightTheme} ${appStyle}`}>
      <Helmet />
      <ToastContainer limit={3} />
      <Router />
    </div>
  );
}

export default App;
