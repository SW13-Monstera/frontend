import './App.css';
import { buttonThemeClass } from './Component/Button/theme.css';
import Router from './Router';

function App() {
  return (
    <div className={`"App" ${buttonThemeClass}`}>
      <Router />
    </div>
  );
}

export default App;
