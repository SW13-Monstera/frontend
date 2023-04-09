import { useEffect } from 'react';
import Router from './Router';
import { setTokenHeader } from './utils';
import { getUserInfo } from 'auth/utils/userInfo';

function App() {
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setTokenHeader();
    }
  }, []);

  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
