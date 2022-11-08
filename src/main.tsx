import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/reset.css';
import './styles/normailize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactGA from 'react-ga';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './ErrorBoundary';
import { GA_TRACKING_ID } from './constants/api';

ReactGA.initialize(GA_TRACKING_ID);

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Root container missing in index.html');

const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
