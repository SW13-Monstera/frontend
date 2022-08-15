import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/reset.css';
import './styles/normailize.css';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root container missing in index.html');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
