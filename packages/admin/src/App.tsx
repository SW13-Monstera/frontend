import { useEffect } from 'react';
import Router from './Router';
import { getUserInfo, setTokenHeader } from './utils';

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
