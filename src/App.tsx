import { buttonThemeClass } from './Component/Button/theme.css';
import Router from './Router';
import './styles/App.css';
import './styles/svg.css';

function App() {
  return (
    <div className={`"App" ${buttonThemeClass}`}>
      <Router />
    </div>
  );
}

export default App;
