import { ToastContainer } from 'react-toastify';
import Router from './Router';
import { appStyle } from './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className={`App ${appStyle}`}>
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
