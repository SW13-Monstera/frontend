import Router from './Router';
import { appStyle } from './styles/App.css';

function App() {
  return (
    <div className={`App ${appStyle}`}>
      <Router />
    </div>
  );
}

export default App;
