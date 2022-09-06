import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/reset.css';
import './styles/normailize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactGA from 'react-ga';

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root container missing in index.html');

const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
